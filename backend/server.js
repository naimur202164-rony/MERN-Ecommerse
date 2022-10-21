const app=require('./app');
const dontenv=require('dotenv');

dontenv.config({path:"backend/config/config.env"})



app.listen(process.env.PORT,()=>{
    console.log(`The server is running on localhost ${process.env.PORT}` )
})