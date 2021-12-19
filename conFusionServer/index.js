const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const dishRouter = require("./routes/dishRouter");
const leaderRouter = require("./routes/leaderRouter");
const promoRouter = require("./routes/promoRouter");
const Dishes = require("./models/dishes");

const app = express();

const url = "mongodb://localhost:27017/conFusion";
mongoose.connect(url).then(
  (db) => console.log("Connected successfully to the server"),
  (err) => console.log(err)
);

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);

app.listen(3000, () => {
  console.log("App is running....");
});
