const {
  getProductsService,
  createProductsService,
} = require("../services/product.services");

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

// module.exports.getWomensView = (req, res) => {
//   res.send("view counted");
// };
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
