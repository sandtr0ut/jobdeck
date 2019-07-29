const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobPostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'comprofile'
  },
  jobTitle: {
    type: String,
    required: true
  },
  nameDisplayed: {
    type: Boolean,
    required: true
  },
  workLocation: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  jobType: {
    type: String
  },
  desiredExperience: {
    type: String
  },
  salary: {
    type: String
  },
  keySkills: {
    type: [String]
  },
  posted: {
    type: Date,
    default: Date.now
  }
});

module.exports = JobPost = mongoose.model('jobpost', JobPostSchema);
