const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();

// middleware

app.use(cors());
app.use(express.json());

// const uri = `mongodb+srv://${process.env.db_USER}:${process.env.DB_PASS}@cluster0.yrvrisu.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://kawaiiss:FG49LGxfSzyomHbJ@cluster0.cygdmom.mongodb.net/`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const allproductsCollection = client
      .db("kawaii")
      .collection("all-products");
    const allCategoriesCollection = client
      .db("kawaii")
      .collection("categories");
    // Get all products
    app.get("/products", async (req, res) => {
      const query = {};
      const products = await allproductsCollection.find(query).toArray();
      res.send(products);
    });
    // Get single product by Id
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const products = await allproductsCollection.findOne(query);
      res.send(products);
    });
    // Get all categories
    app.get("/categories", async (req, res) => {
      const query = {};
      const categories = await allCategoriesCollection.find(query).toArray();
      res.send(categories);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("The kawaii factory server is running");
});

app.listen(port, () => console.log(`Server ${port}`));
