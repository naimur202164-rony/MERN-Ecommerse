const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHander = require("../utils/jwtToken");

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
  //   JWT
  const token = user.getJWToken();

  res.status(201).json({
    success: true,
    token,
    // user,
  });
});

// Login users

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  // checking user has given  password  and email both

  if (!email || !password) {
    return next(new ErrorHander("Please Enter Password and Email  ", 400));
  }

  const user = User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email or Password", 401));
  }

  const isPasswordMatched = user.comparePassword();
  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or Password", 401));
  }
  const token = user.getJWToken();

  res.status(200).json({
    success: true,
    token,
    // user,
  });
});
