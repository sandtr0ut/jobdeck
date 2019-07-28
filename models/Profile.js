const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  company: {
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
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      },
      comsocial: {
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
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
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
  comprofile: [
    {
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
      }
    }
  ],
  jobpost: [
    {
      jobTitle: {
        type: String
      },
      companyName: {
        type: String
      },
      workLocation: {
        type: String
      },
      jobDescription: {
        type: String
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
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
