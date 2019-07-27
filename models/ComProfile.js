const mongoose = require('mongoose');

const ComProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  companyname: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  address: {
    type: String
  },
  tagline: {
    type: String
  },
  industries: {
    type: [String]
  },
  description: {
    type: String
  },
  //   comlikes: [
  //     {
  //       user: {
  //         type: Schema.Types.ObjectId,
  //         ref: 'users'
  //       }
  //     }
  //   ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ComProfile = mongoose.model('comprofile', ComProfileSchema);
