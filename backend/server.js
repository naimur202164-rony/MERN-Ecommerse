const app=require('./app');
const dontenv=require('dotenv');
const  connectDatabase=require('./config/database')

process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shuting down the server due to unhandled Rejection`);
    process.exit(1);
})

// Config
dontenv.config({path:"backend/config/config.env"})
// Database Connection


connectDatabase()




// server
const server=   app.listen(process.env.PORT,()=>{
    console.log(`Server is Working on on localhost:${process.env.PORT}`)
})



// unhanled promise Rejection

process.on("unhandledRejection",err=>{
     console.log(`Error:${err.message}`);
     console.log(`Shutting Down the Server due to unhandled Promise Rejection`);
     server.close(()=>{
        process.exit(1)
     })
})