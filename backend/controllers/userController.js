const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHander = require("../utils/errorhander");
const sendToken = require("../utils/jwtToken");

// Registar Users

const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is my sample id",
      url: "this my demo url",
    },
  });
  sendToken(user,201,res)
});



// Login



const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  sendToken(user,200,res);                                
});

module.exports = {registerUser,loginUser} ;