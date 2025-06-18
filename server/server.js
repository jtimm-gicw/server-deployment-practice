'use strict';

const express = require('express'); // bringing in a toolbox that has helpful tools for creating websites and APIs.
const app = express(); // Creates an instance of an EXPRESS app, turns on the "toolbox"/ the SERVER

// Importing functions for handling errors
const notFoundHandler = require('../handlers/404.js');
const errorHandler = require('../handlers/500.js');
const stamper = require('../middleware/stamper.js');

app.get('/', stamper, (req, res) => { // This sets up a route handler for the home page (/). 
//'stamper' middleware that runs before the response is sent, add a timestamp to the request
// (req, res) => the actual function that handles the request
  res.status(200).send('Hello World')// Response
})

app.get('/data', stamper, (req, res) => {
  let outputObject = { // let outputObject = { ... } creates a new object to send back as the response: even, odd, time
    10: "even",
    5: "odd",
    "time": req.timestamp // we got this from the middleware
  }

  res.status(200).json(outputObject);
}); // This tells the server to send back a JSON response (JavaScript Object Notation)

app.get('/bad', (req, res, next) => {
  next('you messsed up') // 'next': The next function is used to pass control to the next middleware — often an error handler.
});

app.use('*', notFoundHandler); // '*' = any path, This line catches any route that doesn't match your existing ones
app.use(errorHandler); // This line sets up your global error handler. Any time you use next('some error') or something in your app crashes, this function will run.


function start(port) { // It takes in one argument: port — the port number your server will listen on
  app.listen(port, () => console.log(`Server up on port ${port}`))
} // This tells your Express app to start the server and listen for requests on that port.

module.exports = { // module used on teh backend when exporting
  app: app,
  start: start
} // exporting the app and the function start
