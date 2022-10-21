const app=require('./app');
const dontenv=require('dotenv');
dontenv.config({path:"backend/config/config.env"})
const  connectDatabase=require('./config/database')


// Database Connection

connectDatabase()




// server
app.listen(process.env.PORT,()=>{
    console.log(`Server is Working on on localhost:${process.env.PORT}`)
})