const ErrorHander =require('../utils/errorhander');
// this code is used to hanndle server errors and status code
module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode ||500;
    err.message=err.message  || "Internal Server Error";



    // Woring Mongodb Id errors
    if(err.name==="CastError"){
        const message=`Resource  not found . Invaild  ${err.path}`;
        err=new ErrorHander(message,400)
    }



    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}