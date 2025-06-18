'use strict';

module.exports = (req, res) => {
  res.status(404).send({  // .send({...}) This sends a message back to the user — in this case, a JSON object with helpful info.
    error: 404,
    route: req.path,
    message: "Not Found"
// error: 404 → the type of error
// route: req.path → shows which path (URL) caused the error
// message: "Not Found" → a friendly error message
  })
}

