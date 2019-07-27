const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema2 = new Schema({
  jobId: {
    type: Schema.Types.ObjectId,
    ref: "users2"
  },
  jobTitle: {
    type: String,
    required: true
  },
  salary: {
    type: String
  },
  company: {
    type: String
  },
  location: 
    {
      type: String
    }
  ,
  summary: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post2", PostSchema2);
