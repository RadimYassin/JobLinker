const Job = require("../models/Job")




const AllJobs=async(req,res)=>{

    const Jobs=await Job.find({})
    try {
        res.json({data:Jobs})
    } catch (error) {
       console.log("error",error);
    }


}


const CreateJob=async(req,res)=>{
    // jobTitle: {
    //     type: String,
    //     required: true,
    // },
    // company: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // logoCompany: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // workType: {
    //     type: String,
    //     required: true,
    // },
    // location: {
    //     type: String,
    //     required: true,
    // },
    // workPreferences: {
    //     type: String,
    //     required: true,
    // },
    // description: {
    //     type: String,
    //     required: true,
    // },
    // salary: {
    //     type: String,
    //     required: true,
    // },
    // datePosted: {
    //     type: Date,
    //     default: Date.now,
    // },
const {jobTitle,company,logoCompany,workType, location ,workPreferences,description,salary}=req.body
    try {
        const job=await new Job({
            jobTitle,company,logoCompany,workType,location,workPreferences,description,salary
                   })
        job.save()
        res.json({data:"post is a created"})
    } catch (error) {
       console.log("error",error);
    }


}

module.exports={AllJobs,CreateJob}