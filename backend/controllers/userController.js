const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");

// Registar Users

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const users = await User.create({
    name,
    email,
    password,
    avater: {
      public_id: "This is sample id",
      url: "this sample Url",
    },
  });
  res.status(201).json({
    success: true,
    users,
  });
});
