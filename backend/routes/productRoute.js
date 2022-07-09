const express = require('express');
const { getAllProduct, createProduct, updateProduct, deleteProducts, getProductDetails } = require('../controllers/productController');
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');
const router = express.Router();


router.route('/products').get(isAuthenticatedUser,getAllProduct);
router.route('/product/new').post(isAuthenticatedUser,authorizeRoles("admin") ,createProduct);
router.route('/product/:id').put(isAuthenticatedUser, authorizeRoles("admin"),updateProduct).delete(isAuthenticatedUser, authorizeRoles("admin"),deleteProducts).get(getProductDetails);


router.route("/product/:id").get(getProductDetails);

module.exports = router