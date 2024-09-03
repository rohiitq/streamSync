# StreamSync

![ezgif-5-69ea68a897](https://github.com/user-attachments/assets/5b591a3d-3d23-4cbe-b7b9-cd545e8df928)

**Empower Your Live Streams with StreamSync**  
Connect with your audience like never before.

Live Demo: [https://stream-sync.devrohit.tech/](https://stream-sync.devrohit.tech/)  
Latest Release: [https://github.com/rohitsx/streamSync/releases/latest](https://github.com/rohitsx/streamSync/releases/latest)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Development](#development)
- [Testing as a Browser Extension](#testing-as-a-browser-extension)
- [License](#license)

## Introduction

StreamSync is a powerful tool for content creators, streamers, and consultants who want to enhance their live streaming experience. It combines the best features of Twitter Spaces and Super Chat to create a unique platform for audience engagement.

## Features

- **Personal Wallet**: Create your personal wallet to receive Solana from your audience.
- **Priority Interactions**: Prioritize interactions with top supporters.
- **Seamless Integration**: Integrate StreamSync effortlessly into your existing streaming setup.

## Installation

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm
- Git

### Steps to Install

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rohitsx/streamSync.git
   cd streamSync
   ```

2. **Install Client Dependencies:**
   ```bash
   cd client
   npm install
   ```

3. **Configure Client Environment:**
   Update the `.env` file with your environment variables.

4. **Install Server Dependencies:**
   ```bash
   cd ../server
   npm install
   ```

5. **Configure Server Environment:**
   Update the `.env` file with your environment variables.

## Development

To start developing both the client and server, use the following commands:

**Start the Client:**
```bash
cd client
npm run dev
```

**Start the Server:**
```bash
cd ../server
npm run dev
```

This will start both the client and server in development mode with live reloading.

## Testing as a Browser Extension

To test the project as a Chrome extension:

1. **Build the Client:**
   ```bash
   cd client
   npm run build
   ```

2. **Install the Extension:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click "Load unpacked" and select the `dist` folder generated by the build command.

3. **Keep the Server Running:**
   Ensure the server is running for full functionality.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
