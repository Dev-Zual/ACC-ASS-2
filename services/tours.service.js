const Tours = require("../models/Tours");

exports.createATourService = async (data) => {
  const result = await Tours.create(data);
  return result;
};
exports.getToursService = async (filters, queries) => {
  const result = await Tours.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.field)
    .sort(queries.sortBy);

  const total = await Tours.countDocuments(filters);
  const page = Math.ceil(total / queries.limit);
  return { total, page, result };
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
