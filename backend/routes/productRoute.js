const express=require('express');
const { getAllProducts, createProducts, updateproduct } = require('../controllers/productController');



const router=express.Router();

// All Routes
router.route('/products').get(getAllProducts)
router.route('/product/new').post(createProducts)
router.route('/product/:id').put(updateproduct)

module.exports=router;