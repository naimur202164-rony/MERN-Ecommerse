const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const Order = require("../models/orderModel");

exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shipingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shipingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shipingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shipingPrice,
    totalPrice,
    paidAt: Date.now,
    user: req.user._id,
  });

  res.status(201).json({
    message:"order added successfully",
    success: true,
    order,
  });
});
