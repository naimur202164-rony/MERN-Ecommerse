const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');
const cookieParser=require("cookie-parser");
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}
app.use(express.json())
app.use(cookieParser())
// Routes Imports
const product = require('./routes/ProductRoute');
const user = require("./routes/userRoutes");
const order=require("./routes/orderRoute")

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);


// Middleware for error 
app.use(errorMiddleware);




module.exports = app;