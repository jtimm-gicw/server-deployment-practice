'use strict';

module.exports = (req, res, next) => { // req: the request object
// res: the response object
// next: a function that tells Express to move on to the next step
  req.timestamp = new Date(); // This adds a new piece of information to the request: the current date and time.
  next();
}
