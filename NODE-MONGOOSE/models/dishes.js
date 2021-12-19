const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const disheSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Dishes = new mongoose.model("Dish", disheSchema);

module.exports = Dishes;
