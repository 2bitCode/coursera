const Dishes = require("./models/dishes");
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/conFusion";

const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected to the server");

  Dishes.create({
    name: "Sachin",
    description: "test",
  })
    .then((dish) => {
      console.log("Saved", dish);

      return Dishes.findByIdAndUpdate(
        dish._id,
        {
          $set: {
            description: "updated text",
          },
        },
        { new: true }
      ).exec();
    })
    .then((dish) => {
      console.log("Found dish: ", dish);

      dish.comment.push({
        rating: 4,
        comment: "I am a monster",
        author: "Nolan",
      });

      return dish.save();
    })
    .then((dish) => {
      console.log("Pushed comments:", dish);

      return dish.remove({});
    })
    .then(() => mongoose.connection.close())
    .catch((err) => console.log("Error catched", err));
});
