const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
  },
  {
    timesestamps: true,
  }
);

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
    comment: [commentSchema],
  },
  {
    timestamps: true,
  }
);

const Dishes = new mongoose.model("Dish", disheSchema);

module.exports = Dishes;
