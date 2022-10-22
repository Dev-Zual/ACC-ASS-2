const { createATourService } = require("../services/tours.service");

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
