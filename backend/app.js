const express=require('express');
const app=express();


// config


app.use(express.json())

// Routes Imports


const product=require('./routes/productRoute');
app.use('/api/v1',product);










module.exports=app;