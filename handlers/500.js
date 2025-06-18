'use strict';

module.exports = (error, req, res, next) => {
  res.status(500).send({ // This sets the HTTP response code to 500, which means "Internal Server Error" — the problem was on the server.
    error: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: `SERVER ERROR: ${error.message}`
// route: req.path → shows what URL caused the problem
// query: req.query → shows any query parameters that were sent (like ?search=dog)
// body: req.body → shows the data the client sent in the request body (like in a form or JSON)
// message: SERVER ERROR: ${error.message} → gives a more detailed message from the error itself
  })
}
