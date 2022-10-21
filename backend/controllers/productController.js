const Product = require("../models/productModel");

// create Product  if admin

exports.createProducts = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  res
    .status(200)
    .json({ message: "All Products Loaded ", success: true, products });
};
