import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import { getDb } from '../config/database';

const JWT_Token: string = process.env.JWT_SECRET || '';

export const signup = async (req: Request, res: Response) => {
  console.log("/signup");

  try {
    const { username, email, password } = req.body;
    const db = getDb();
    const usersCollection = db.collection('users');

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) return res.send('email_exists');

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await usersCollection.insertOne({ username, email, password: hashedPassword });

    res.status(201).send('success_signup');
  } catch (error) {
    console.error(error);
    res.status(500).send('server_error');
  }
};

export const login = async (req: Request, res: Response) => {
  console.log('/login');

  try {
    const { email, password } = req.body;
    const db = getDb();
    const usersCollection = db.collection('users');

    // Find user
    const user = await usersCollection.findOne({ email });
    if (!user) return res.send('incorrect_email');

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.send('incorrect_pass');

    const token = jwt.sign({ userId: user._id }, JWT_Token, { expiresIn: '30d' });

    res.status(200).json({ message: 'success_login', token, username: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server_error' });
  }
};

export const validateToken = async (req: Request, res: Response) => {
  console.log('validate-token');

  const token = req.body.token;
  if (!token) {
    return res.status(401).json({ valid: false });
  }

  try {
    const jwtToken = jwt.verify(token, JWT_Token) as { userId: string };
    const userId = jwtToken.userId;

    const db = getDb();
    const usersCollection = db.collection('users');
    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    
    if (user) {
      res.json({ valid: true, username: user.username });
    } else {
      res.status(404).json({ valid: false, message: 'User not found' });
    }
  } catch (error) {
    res.status(401).json({ valid: false });
  }
};