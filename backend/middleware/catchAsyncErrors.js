
// This function is used to use try can catch erros
module.exports = theFunc => (req,res,next) => {
    Promise.resolve(theFunc(req,res,next)).catch(next);
}