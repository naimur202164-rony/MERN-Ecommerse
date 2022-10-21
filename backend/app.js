const express=require('express');
const app=express();

const dontenv=require('dotenv');


// config
dontenv.config({path:"backend/config/config.env"})












module.exports=app;