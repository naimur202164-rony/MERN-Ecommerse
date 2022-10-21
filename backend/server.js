const app=require('./app');
const dontenv=require('dotenv');
const  connectDatabase=require('./config/database')



// Config
dontenv.config({path:"backend/config/config.env"})
// Database Connection



connectDatabase()




// server
app.listen(process.env.PORT,()=>{
    console.log(`Server is Working on on localhost:${process.env.PORT}`)
})