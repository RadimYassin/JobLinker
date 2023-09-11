const express= require("express");
const { Login, Register } = require("../controllers/UserController");




const Route=express.Router()

// login route


Route.post("/login",Login)
// register
Route.post("/register",Register)
module.exports=Route