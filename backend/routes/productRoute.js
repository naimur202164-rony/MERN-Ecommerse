const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const {isAuthenticatedUser}=require('../middleware/auth');
const router = express.Router();

router.route("/products").get( getAllProducts);

router.route("product/new").post(createProduct);

router.route("/product/:id").put(isAuthenticatedUser,updateProduct).delete(isAuthenticatedUser,deleteProduct);

router.route("/product/:id").get(getProductDetails);

module.exports = router;
