const express=require('express');
const app=express();
const errorMiddleware=require('./middleware/error');



app.use(express.json())
// Routes Imports

const product=require('./routes/productRoute');

app.use('/api/v1/',product); 

// Middleware for err
app.use(errorMiddleware);

module.exports=app;