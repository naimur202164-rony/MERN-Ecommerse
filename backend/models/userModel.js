const mongoose=require("mongoose");
const validator=require("validator");


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        maxLength:[30,"Name Can Not excced 30 characters"],
        minLength:[4,"Name Should have More than 4 characters"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validator:[validator.isEmail,"Please Enter a valid Email"]
    },
    password:{
        type:String,
        required:[true,"Please Enter Your Password"],
        minLength:[8,"Password should be gater than 8 chatacters"]  ,
        select:false
    },
    avatar:{
        public_id:{
                type:String,
                required:true,
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date()
})

module.exports=mongoose.model("User",userSchema);