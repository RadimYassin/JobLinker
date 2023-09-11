require('dotenv').config()
const express=require("express");

const mongose=require("mongoose");
const bodyParser=require("body-parser");
const cors = require('cors');
const connectDB = require('./config/db');
const UserRoutes = require('./routes/UserRoutes');


const app=express()




app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(bodyParser.json());
// route auth

app.use("/auth",UserRoutes)
app.listen(process.env.PORT || 4000,()=>{
    console.log("4000 listen");
    connectDB()
})


