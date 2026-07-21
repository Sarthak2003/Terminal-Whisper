
# Terminal Whisper - Node.js Chat Application

Welcome to the Terminal Whisper Chat Node.js Application! This simple chat allows users to communicate
anonymously in real-time using a terminal.


<img src="https://www.svgrepo.com/show/354445/terminal.svg" alt="Terminal Icon" width="200" height="200">


## Server Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Server Installation

1. **Clone the GitHub repository:**

   ```
   git clone https://github.com/AnIntellectualBeing/Terminal-Whisper.git
   ```


2. **Navigate to the Server directory:**
   ```bash
   cd Terminal-Whisper
   ```

3. **Install server dependencies (including Socket.io):**
   ```bash
   sudo apt update
   sudo apt install nodejs npm 
   npm install socket.io express
   ```

5. **Running the Server:**
   ```bash
   node server.js
   ```

   The server will be running on a default port (e.g., 3000).

## Client Setup

### Prerequisites

- Node.js and npm installed on the client machine.


### Client Installation

1. **Clone the GitHub repository on the client machine:**

   ```
   git clone https://github.com/AnIntellectualBeing/Terminal-Whisper.git
   ```

2. **Navigate to the Client directory:**

   ```
   cd Terminal-Whisper
   ```

3. **Install client dependencies (including Socket.io-client and readline):**

   ```
   # Update the package list and install Node.js and npm
   sudo apt update
   sudo apt install nodejs npm 

   # Install socket.io-client and readline as dependencies
   npm install socket.io-client readline
   ```

4. **Edit the Socket.io server URL:**

   Open `client.js` in a text editor and locate the following line:

   ```javascript
   const socket = io('https://server.com');
   ```

   Replace `'https://server.com'` with the URL of your Socket.io server,
    for example, if you are using ngrok:

   ```javascript
   const socket = io('https://your-ngrok-url');
   ```

### Running the Client

1. **Start the client:**

   ```
   node client.js
   ```

2. **Start chatting!**

# Features

- Real-time anonymous chat.
- Simple command-line interface.
- Unique client identifiers for each user.

# Additional Notes

- For security reasons, it is recommended to use this application in a trusted environment.
- Customize the Socket.io server URL in the code based on your deployment.

# Contributing

Feel free to contribute to the project by submitting issues or pull requests on 
the https://github.com/AnIntellectualBeing/Terminal-Whisper.

# License

This project is licensed under the MIT License.


