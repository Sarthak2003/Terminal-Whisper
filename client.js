// Node.js Chat Client

// Import required modules
const readline = require('readline');
const io = require('socket.io-client');

// Connect to the Socket.io server
const socket = io('https://server.com');

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate a unique identifier for this client
const clientId = Math.random().toString(36).substring(7);

// Display a welcome message
console.log('Welcome to the Chat!');

// Listen for incoming messages
socket.on('message', (data) => {
  const { sender, message } = data;
  // Display messages with proper formatting
  process.stdout.write(`${sender}: ${message}\n`);
  rl.prompt();
});

// Take user input and send messages
rl.setPrompt('');
rl.prompt();

rl.on('line', (input) => {
  // Send messages with the client's unique identifier
  socket.emit('message', { sender: `You[${clientId}]`, message: input.trim() });
});

// Handle chat closure
rl.on('close', () => {
  console.log('Chat closed. Goodbye!');
  process.exit(0);
});

// GitHub https://github.com/AnIntellectualBeing/Anonymous-Chat
//AnIntellectualBeing
