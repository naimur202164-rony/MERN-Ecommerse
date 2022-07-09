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


    // Email duplicate key error
    if(err.code===11000){
        const message=`Duplicate  ${Object.keys(err.keyValue)}`
        err=new ErrorHander(message,400)
    }

    // Worng JWT Error
    if(err.name ==="JsonWebTokenError"){
        const message=`Json web Token is invalid ,try again `;

        err=new ErrorHander(message,400)
    }

    // JWT EXPIRE ERROR
    if(err.name==="TokenExpireError"){
        const message=`JSON web Token is expired ,Try Agin`;
        err=new ErrorHander(message,400 )
    }



    res.status(err.statusCode).json({
        success:false,
        message:err.message
    });



}