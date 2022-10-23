const Tours = require("../models/Tours");

let count = 0;
const viewCount = async (req, res, next) => {
  count++;
  const countBY = new Tours(count);
  await countBY.save();
  next();
};

module.exports = viewCount;
