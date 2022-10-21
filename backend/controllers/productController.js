const Product = require("../models/productModel");

// create Product

exports.createProducts = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success:true,
    product
  });
};

exports.getAllProducts = (req, res) => {
  res.status(200).json({ message: "The Route is Working " });
};
