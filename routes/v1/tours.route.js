const express = require("express");
const tourController = require("../../controllers/tours.controller");
const viewCount = require("../../middleware/viewCount");
const router = express.Router();

router.route("/").get(tourController.getTours).post(tourController.createATour);

router
  .route("/:id")
  .get(tourController.getATours)
  .patch(tourController.updateTour);

module.exports = router;
