const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User=require("../models/userModel");

// Registar Users

  const registerUser = catchAsyncErrors(async (req, res, next) => {  
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id:"this is my sample id",
        url: "this my demo url",
      },
    });
  
    res.status(201).json({
        success:true,
        user
    })
  });

  module.exports=registerUser;