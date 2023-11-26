const {
  getProductsService,
  createProductsService,
  deleteProductById,
  getProductById,
} = require("../services/product.services");

// Dashboard product get
module.exports.getProducts = async (req, res, next) => {
  try {
    const products = await getProductsService();

    res.status(200).json({
      stauts: "successs",
      message: "Data get successfully!",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Can't get data!",
      error: error.message,
    });
  }
};

// Dashboard product create
module.exports.createProduct = async (req, res) => {
  try {
    const result = await createProductsService(req.body);

    res.status(200).json({
      stauts: "success",
      message: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

// Dashboard product Delete
module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteProductById(id);

    res.status(200).json({
      stauts: "success",
      message: "Delete successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Couldn't delete product",
      error: error.message,
    });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getProductById(id);

    res.status(200).json({
      stauts: "success",
      message: "Delete successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "Couldn't delete product",
      error: error.message,
    });
  }
};

exports.fileUpload = (req, res) => {
  try {
    res.status(200).json(req.file);
  } catch (error) {
    res.status(400).json({
      stauts: "fail",
      message: "File upload failed",
      error: error.message,
    });
  }
};
