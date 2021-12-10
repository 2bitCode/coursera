const express = require("express");
const morgan = require("morgan");
const dishRouter = require("./routes/dishRouter");
const leaderRouter = require("./routes/leaderRouter");
const promoRouter = require("./routes/promoRouter");

const app = express();

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);

app.listen(3000, () => {
  console.log("App is running....");
});
