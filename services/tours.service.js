const Tours = require("../models/Tours");

exports.createATourService = async (data) => {
  const result = await Tours.create(data);
  return result;
};
