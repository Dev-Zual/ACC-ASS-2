const Tours = require("../models/Tours");

exports.createATourService = async (data) => {
  const result = await Tours.create(data);
  return result;
};
exports.getToursService = async () => {
  const result = await Tours.find({});
  return result;
};
exports.getAToursService = async (id) => {
  const result = await Tours.findOne({ _id: id });
  return result;
};
exports.updateTourService = async (id, data) => {
  const result = await Tours.updateOne(
    { _id: id },
    { $set: data },
    {
      runValidators: true,
    }
  );
  return result;
};
