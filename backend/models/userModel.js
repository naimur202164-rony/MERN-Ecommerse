const mongoose = require("mongoose");
const validators = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength:[30,"Name can not be larger"],
    minLength:[4,"Name Sould have 4 character"]
  },
});
