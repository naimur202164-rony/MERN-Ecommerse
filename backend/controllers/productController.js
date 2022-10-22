const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apifeatures");
const ErrorHander = require("../utils/jwtToken");

// create Product  if admin

exports.createProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const apiFeatures = new ApiFeatures(Product.find(), req.query).search();
  const products = await apiFeatures.query;
  res
    .status(200)
    .json({ message: "All Products Loaded ", success: true, products });
});
// Update Product --Admin
exports.updateproduct = catchAsyncErrors(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});
// delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "product Deleted  successfully",
  });
});

// Get Product Details

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not Found ", 404));
  }
  res.status(200).json({
    success: true,
    message: "  successfully",
    product,
  });
});
