const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var JobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
        unique: true,
    },
    logoCompany: {
        type: String,
        required: true,
        unique: true,
    },
    workType: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    workPreferences: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    datePosted: {
        type: Date,
        default: Date.now,
    },

});

//Export the model
module.exports = mongoose.model('Job', JobSchema);