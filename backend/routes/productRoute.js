const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  getAdminProducts,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/product/new")
  .post(isAuthenticatedUser, createProduct);

router
  .route("/product/:id")
  .put(isAuthenticatedUser,updateProduct)
  .delete(isAuthenticatedUser,  deleteProduct);

router.route("/product/:id").get(getProductDetails);




module.exports = router;
