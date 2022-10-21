const express = require("express");
const app = express();
const ErrorMiddleware = require("./middleware/error");
const catchAsyncErrors=require('../backend/middleware/catchAsyncErrors');
// config

app.use(express.json());

// Routes Imports

const product = require("./routes/productRoute");
app.use("/api/v1", product);

// middleware for Errors

app.use(ErrorMiddleware);

module.exports = app;
