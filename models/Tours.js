const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a tour name!"],
      minLength: [3, "Name must be 3 character."],
      maxLength: [100, "Name must be max 100 character."],
      unique: [true, "tour name should be unique"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "please provide a description for this tour!"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for this tour!"],
      min: [0, "price can't be negative!"],
    },
    viewCount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "tours",
  }
);

const Tours = mongoose.model("Tours", tourSchema);

module.exports = Tours;
