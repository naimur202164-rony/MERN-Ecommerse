const app=require('./app');
// Data Base Connection
const connectDatabase=require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
console.log(`Error:${err.message }`);
console.log(`Shuting down the server due to Uncaught Exception`);
process.exit(1);
})

connectDatabase()

const server= app.listen(5000,()=>{
    console.log(`the server is running on port 5000`)
})



// Unhandled Promis Rejections
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message} `);
    console.log(`Shutting down the server due to unhandled Promise Rejections`);
    server.close(()=>{
        process.exit(1)
    })
})