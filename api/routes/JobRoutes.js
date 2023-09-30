

const express= require("express");
const { AllJobs,CreateJob } = require("../controllers/JobController");





const Route=express.Router()

// all jobs;


Route.get("/Jobs",AllJobs)

Route.post("/job",CreateJob)


module.exports=Route