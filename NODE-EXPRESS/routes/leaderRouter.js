const express = require("express");
const leaderRouter = express.Router();

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    next();
  })
  .get((req, res) => {
    res.end("Sending you something....");
  })
  .post((req, res) => {
    res.end(`Posting something for you just wait....`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT not supported....");
  })
  .delete((req, res) => {
    res.end("Deleting something for you....");
  });

leaderRouter
  .route("/:leaderId")
  .all((req, res, next) => {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    next();
  })
  .get((req, res) => {
    res.end(`Sending promotions/${req.params.leaderId} to you`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /promotions/${req.params.leaderId}`
    );
  })
  .put((req, res) => {
    res.end(`Updating with id: ${req.params.leaderId} \n`);
  })
  .delete((req, res) => {
    res.end(`Deleting with id: ${req.params.leaderId}`);
  });

module.exports = leaderRouter;
