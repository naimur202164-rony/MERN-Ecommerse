const app =require('./app');
const connectDatabase=require('./config/database')


// Data base Connected
connectDatabase()


app.listen(5000,()=>{
    console.log(`the server is working on 5000`);
})