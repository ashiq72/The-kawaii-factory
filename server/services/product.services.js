const Product = require("../models/Product");

exports.getProductsService = async (query) => {
  const products = await Product.find({});
  return products;
};
exports.createProductsService = async (data) => {
  //save method
  const product = new Product(data);
  const result = await product.save();

  // Create method
  // const result = await Product.create(req.body);
  return result;
};
