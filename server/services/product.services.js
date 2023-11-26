const Product = require("../models/Product");

exports.getProductsService = async (query) => {
  const products = await Product.find({});
  return products;
};
exports.createProductsService = async (data) => {
  //save method
  const product = new Product(data);
  const result = await product.save();
  return result;
};
exports.deleteProductById = async (id) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};
