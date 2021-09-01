const express = require('express');
const app = express();  /** Express server */

/**
 * Express route handler using the http get method takes 2 arguments.
 * The first argument is the route definition.  Here it is a '/' route.
 * The second argument is an arrow callback function that 
 * takes a request and response argument.
 * This function gets called whenever the get route is called.
 * In the function body a response using res.send() is created to send back to the request;
 */
app.get('/', (req, res) => {
  res.send({ hey: 'foo' });
});

/** Express tells Node to listen to port 5000 for any incoming traffic. */
const PORT = process.env.PORT || 5000;
app.listen(PORT);