const express = require("express");
const productController = require("../../controllers/product.controller");
const uploader = require("../../middleware/uploader");
const router = express.Router();

router.post(
  "/file-upload",
  uploader.single("image"),
  productController.fileUpload
);

router
  .route("/:id")
  .get(productController.getProductById)
  .delete(productController.deleteProduct);

router
  .route("/")
  /**
   * @api {get} /tools All womens
   * @apiDescription Get all the womens
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(productController.getProducts)
  /**
   * @api {post} /tools save a product
   * @apiDescription Product for kawaiisss
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(productController.createProduct);

// ekhane viewCount middleware ti shudu matro ei route er jonno
// router.route("/:id").get(viewCount, womensController.getWomensView);

module.exports = router;
