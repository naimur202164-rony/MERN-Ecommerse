const mongoose=require('mongoose');



const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter the Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter the Product Description"]
    }
})