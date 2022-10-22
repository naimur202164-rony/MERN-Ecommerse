const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHander = require("../utils/jwtToken");

// Registar Users

exports.registerUser = catchAsyncErrors(async (req, res, next) => {



  // const { name, email, password } = req.body;

  // const user = await User.create({
  //   name,
  //   email,
  //   password,
  //   avatar: {
  //     public_id: myCloud.public_id,
  //     url: myCloud.secure_url,
  //   },
  // });

  // sendToken(user, 201, res);




// V2


const { name, email, password } = req.body;

const user = await User.create({
  name,
  email,
  password,
  avatar: {
    public_id:"sample-id",
    url: "Sample-URL",
  },
});

sendToken(user, 201, res)
});

// Login users
// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
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

  sendToken(user, 200, res);
});