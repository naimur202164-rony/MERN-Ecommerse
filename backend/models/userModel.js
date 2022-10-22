const mongoose = require("mongoose");
const validators = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name can not be larger"],
    minLength: [4, "Name Sould have 4 character"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validators.isEmail, "Please Eenter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter a password"],
    minLength: [8, "password Sould have 8 character"],
    select: false,
  },
  avater: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// Encrpting the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});




// JWT TOKEN








module.exports = mongoose.model("User", userSchema);
