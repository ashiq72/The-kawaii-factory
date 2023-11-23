const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

// routers
const productRoute = require("./routes/v1/product.route");

// Product route
app.use("/api/v1/product", productRoute);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
