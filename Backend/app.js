//console.log("kk");
//9t6b4IwItUH44NHS

const express = require("express");
const mongoose = require("mongoose");
const router = require ("./Routes/UserRoutes");
const app =  express();
const cors = require("cors");

//middleware
//app.use("/",(req, res, next) => {
//    res.send("It Is Working.............");
//})
app.use(express.json());
app.use(cors());
app.use("/users",router);




mongoose.connect("mongodb+srv://admin:9t6b4IwItUH44NHS@cluster0.tjm7v.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log((err)));