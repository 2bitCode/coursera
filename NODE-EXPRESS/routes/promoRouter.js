const express = require("express");
const promoRouter = express.Router();

promoRouter
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

promoRouter
  .route("/:promoId")
  .all((req, res, next) => {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    next();
  })
  .get((req, res) => {
    res.end(`Sending promotions/${req.params.promoId} to you`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /promotions/${req.params.promoId}`
    );
  })
  .put((req, res) => {
    res.end(`Updating with id: ${req.params.promoId} \n`);
  })
  .delete((req, res) => {
    res.end(`Deleting with id: ${req.params.promoId}`);
  });

module.exports = promoRouter;
