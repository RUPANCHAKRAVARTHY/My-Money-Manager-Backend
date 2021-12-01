
const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const {  errorHandler , notFound } = require("./middleware/errorMiddleware");
const userRoute = require("./routes/users/userRoute");
const app =express();

//env file
dotenv.config();

//dbConnect
dbConnect();

//middleware
app.use(express.json());

//routes
app.use("/api/users", userRoute);

//errors
app.use(notFound);
app.use(errorHandler);

module.exports = app;