
const express =require('express');
const { getAllProducts } = require('../controllers/productCotroller');


const router=express.Router();
// Routes

router.route('/products').get(getAllProducts);

module.exports=router;