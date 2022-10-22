const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");
const app = require("./app");
const port = process.env.PORT || 8080;

mongoose.connect(process.env.DB).then(() => {
  console.log("Database connection is seccessfull!".red.bold);
});

app.listen(port, () => {
  console.log(`server running at ${port}`.yellow.bold);
});
