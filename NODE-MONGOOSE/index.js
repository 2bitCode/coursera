const Dishes = require("./models/dishes");
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/conFusion";

const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected to the server", db);

  const newDish = Dishes({
    name: "Sachin",
    description: "test",
  });

  newDish
    .save()
    .then((dish) => {
      console.log("Saved", dish);

      return Dishes.find({});
    })
    .then((dishes) => {
      console.log("Found dishes: ", dishes);

      return Dishes.remove({});
    })
    .then(() => mongoose.connection.close())
    .catch((err) => console.log("Error catched", err));
});
