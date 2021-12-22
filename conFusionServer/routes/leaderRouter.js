const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Leaders = require("../models/leaders");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .get((req, res, next) => {
    Leaders.find({})
      .then(
        (leaders) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "apllication/json");
          res.json(leaders);
        },
        (err) => next(err)
      )
      .catcch((err) => next(err));
  })
  .post((req, res, next) => {
    Leaders.create(req.body);
    then(
      (leader) => {
        console.log("Leader created: ", leader);
        res.statusCode = 200;
        res.setHeader("Content-Type", "apllication/json");
        res.json(leader);
      },
      (err) => next(err)
    ).catch((err) => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT not supported....");
  })
  .delete((req, res) => {
    Leaders.remove({}).then((resp) => {
      console.log("Deleted all");
      res.statusCode = 200;
      res.setHeader("Content-Type", "apllication/json");
      res.json(resp);
    });
  });

leaderRouter
  .route("/:leaderId")
  .get((req, res, next) => {
    Leaders.findById(req.params.leaderId)
      .then(
        (leader) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "apllication/json");
          res.json(leader);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /promotions/${req.params.leaderId}`
    );
  })
  .put((req, res) => {
    Leaders.findByIdUpdate(
      req.params.leaderId,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    )
      .then(
        (leader) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(leader);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete((req, res) => {
    Leaders.findByIdAndRemove(req.params.leaderId)
      .then(
        (resp) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = leaderRouter;
