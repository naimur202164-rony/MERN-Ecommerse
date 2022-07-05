const app=require('./app');
// Data Base Connection
const connectDatabase=require("./config/database");


connectDatabase()

app.listen(5000,()=>{
    console.log(`the server is running on port 5000`)
})