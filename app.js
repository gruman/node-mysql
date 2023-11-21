// Import the express library
const express = require('express');
// Create an instance of the express application
const app = express();
// Import the body-parser library for handling HTTP request bodies
var bodyParser = require('body-parser');
// Define the port for the server to listen on
const port = 8082;
// Import the cors library for handling Cross-Origin Resource Sharing
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());
// Configure body-parser to handle URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up middleware to handle CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Import tutorial routes from the 'tutorial' module
const tutorialRoutes = require('./routes/tutorial');
// Use the tutorial routes for requests to the root path
app.use('/', tutorialRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log("Example app listening on port " + port);
});
