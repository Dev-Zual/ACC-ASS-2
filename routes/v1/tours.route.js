const express = require("express");
const tourController = require("../../controllers/tours.controller");
const router = express.Router();

router.route("/").get().post(tourController.createATour);

module.exports = router;
