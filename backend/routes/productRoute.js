const express = require('express');
const { getAllProduct, createProduct, updateProduct, deleteProducts, getProductDetails } = require('../controllers/productController');
const { isAuthenticatedUser } = require('../middleware/auth');
const router = express.Router();


router.route('/products').get(isAuthenticatedUser, getAllProduct);
router.route('/product/new').post(createProduct);
router.route('/product/:id').put(updateProduct).delete(deleteProducts).get(getProductDetails);
module.exports = router