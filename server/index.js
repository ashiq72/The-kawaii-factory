// const express = require("express");
// const cors = require("cors");
// const port = process.env.PORT || 5000;
// require("dotenv").config();
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const dbConnect = require("./utils/dbConnect");
// const womensRoutes = require("./routes/v1/womens.route");
// const viewCount = require("./middleware/viewCount");
// const app = express();

// // middleware

// app.use(cors());
// app.use(express.json());

// // Total je kono api call korle ei middleware call hobe
// // app.use(viewCount);

// // Database connecttion
// dbConnect();

// app.use("/api/v1/womens", womensRoutes);

// // async function run() {
// //   try {
// //     const womensCollection = client.db("kawaii").collection("women");
// //     const allproductsCollection = client
// //       .db("kawaii")
// //       .collection("all-products");

// //     app.get("/womens", async (req, res) => {
// //       const query = {};
// //       const products = await womensCollection.find(query).toArray();
// //       res.send(products);
// //     });
// //     app.get("/allproducts", async (req, res) => {
// //       const query = {};
// //       const products = await allproductsCollection.find(query).toArray();
// //       res.send(products);
// //     });
// //   } finally {
// //   }
// // }
// // run().catch(console.dir);

// app.get("/", async (req, res) => {
//   res.send("server is running");
// });
// app.all("*", (req, res) => {
//   res.send("No route found");
// });
// app.listen(port, () => console.log(`Server ${port}`));
