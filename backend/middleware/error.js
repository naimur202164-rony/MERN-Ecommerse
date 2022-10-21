const ErrorHander = require("../utils/errorhander");










module.exports = (err,req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";




  // Worng Mongodb Errors
  if(err.name==="castError"){
    const message=`Resource  not found  invalid :${err.path}`;
    err=new ErrorHander(message,400 );
  }








    res.status(err.statusCode).json({
        success:false,
        error:err
    })
};
