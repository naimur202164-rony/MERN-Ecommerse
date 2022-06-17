
const express =require('express');
const { getAllProducts, createProduct } = require('../controllers/productCotroller');


const router=express.Router();
// Routes

router.route('/products').get(getAllProducts);
router.route("/product/new").post(createProduct);

module.exports=router;