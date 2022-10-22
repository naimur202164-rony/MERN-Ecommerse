const express = require("express");
const app = express();
const ErrorMiddleware = require("./middleware/error");
// config

app.use(express.json());

// Routes Imports

const product = require("./routes/productRoute");
const user=require('./routes/userRoutes')
app.use("/api/v1", product);
app.use('/api/v1/',user)

// middleware for Errors

app.use(ErrorMiddleware);

module.exports = app;
