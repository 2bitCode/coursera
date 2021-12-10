const express = require("express");
const morgan = require("morgan");
const dishRouter = require("./routes/dishRouter");

const app = express();

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use("/dishes", dishRouter);

app.listen(3000, () => {
  console.log("App is running....");
});
