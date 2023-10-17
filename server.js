// Import the necessary modules
const http = require('http');

// Define the hostname and port for your server
const hostname = '0.0.0.0'; // Listen on all network interfaces
const port = process.env.PORT || 3000; // Use the provided PORT environment variable or default to port 3000

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response status and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send a simple "Hello, World!" response
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

