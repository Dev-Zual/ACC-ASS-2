const {
  createATourService,
  getToursService,
  deleteToursService,
  getAToursService,
  updateTourService,
} = require("../services/tours.service");

exports.createATour = async (req, res, next) => {
  try {
    const result = await createATourService(req.body);
    res.status(200).json({
      status: "success",
      message: "successfully create the tour.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "fail to create a post",
      error: error.message,
    });
  }
};
exports.getTours = async (req, res, next) => {
  try {
    let filters = { ...req.query };

    //get all queries
    const queries = {};
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    // get specific data with filtering
    if (req.query.fields) {
      const field = req.query.fields.split(",").join(" ");
      queries.field = field;
    }

    const result = await getToursService(queries);
    res.status(200).json({
      status: "success",
      message: "successfully get the tours.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "fail to get the tours",
      error: error.message,
    });
  }
};
exports.getATours = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await getAToursService(id);
    res.status(200).json({
      status: "success",
      message: "successfully get the tours.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "fail to get the tours",
      error: error.message,
    });
  }
};
exports.updateTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const result = await updateTourService(id, data);
    res.status(200).json({
      status: "success",
      message: "successfully update the tours.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "fail to update the tours",
      error: error.message,
    });
  }
};
