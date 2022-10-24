const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/errorhander");
const { Error } = require("mongoose");

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
  //   folder: "avatars",
  //   width: 150,
  //   crop: "scale",
  // });

  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "This is Sample Id",
      url: "This is sample Uri",
    },
  });

  sendToken(user, 201, res);
});

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

// Logout User

exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    messaged: "Loged Out Successfully",
  });
});

// Forgot passowrd

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return next(new ErrorHandler("User  not  found ", 404));
  }
  // rest TOken reset password toeken;

  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  // message
  const message = `Your Password  reset token is :-\n\n  ${resetPasswordUrl} \n\n if you have not requseted  this email then  please  ignore it `;
  try {
    await sendEmail({
      email: user.email,
      subject: `Eccommerce  Password  Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email Send to  ${user.email}  successfuly`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHander(error.message, 500));
  }
});

// Reset passowrd

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  // creating token  has hash 
  const resetPasswordToken = (this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex"));

    const user=await User.findOne({
      resetPasswordToken,
      resetPasswordExpire:{$gt:Date.now()},
    })
    if(!user){
      return next (new ErrorHander("Reset Password Token is not valid has beeen expired",404))
    }


    if(req.body.password !==req.body.cofirmPassword){
      return next(new   ErrorHander("Password does  not match ",400));
    }


    user.password=req.body.password;
    user.resetPasswordToken=undefined,
    user.resetPasswordExpire=undefined,


    await user.save();
    sendToken(user,200,res)

});

// Get User Details

exports.getUserDetails=catchAsyncErrors(async(req,res,next)=>{
  const user=await User.findByIdAndRemove(req.user.id);
  res.status(200).json({
    success:true,
    user,
  })
})
