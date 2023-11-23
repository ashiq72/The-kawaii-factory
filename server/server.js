const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

// Server
const port = process.env.PORT || 8080;

// Database connection
mongoose.connect(process.env.DATABASE).then(() => {
  console.log(`Database connection is successful`.blue.bold);
});

const app = require("./app");

app.listen(port, () => {
  console.log(`App is running on port ${port}`.white.bold);
});
