const express=require('express');
const { getAllProducts, createProducts } = require('../controllers/productController');



const router=express.Router();


router.route('/products').get(getAllProducts)
router.route('/product/new').post(createProducts)


module.exports=router;