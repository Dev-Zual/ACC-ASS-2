const express = require("express");
const cors = require("cors");
const tourRoutes = require("./routes/v1/tours.route");
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("route is working");
});

app.use("/api/v1/tours", tourRoutes);

module.exports = app;
