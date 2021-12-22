const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Promotions = require("../models/promotions");

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .get((req, res, next) => {
    Promotions.find({})
      .then(
        (promos) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "apllication/json");
          res.json(promos);
        },
        (err) => next(err)
      )
      .catcch((err) => next(err));
  })
  .post((req, res, next) => {
    Promotions.create(req.body);
    then(
      (promo) => {
        console.log("Promotion created: ", promo);
        res.statusCode = 200;
        res.setHeader("Content-Type", "apllication/json");
        res.json(promo);
      },
      (err) => next(err)
    ).catch((err) => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT not supported....");
  })
  .delete((req, res) => {
    Promotions.remove({}).then((resp) => {
      console.log("Deleted all");
      res.statusCode = 200;
      res.setHeader("Content-Type", "apllication/json");
      res.json(resp);
    });
  });

promoRouter
  .route("/:promoId")
  .get((req, res, next) => {
    Promotions.findById(req.params.promoId)
      .then(
        (promo) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "apllication/json");
          res.json(promo);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /promotions/${req.params.promoId}`
    );
  })
  .put((req, res) => {
    Promotions.findByIdUpdate(
      req.params.promoId,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    )
      .then(
        (promo) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promo);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete((req, res) => {
    Promotions.findByIdAndRemove(req.params.promoId)
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

module.exports = promoRouter;
