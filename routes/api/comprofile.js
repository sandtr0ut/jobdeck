const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const ComProfile = require('../../models/ComProfile');
const User = require('../../models/User');
const Post = require('../../models/Post');

// @route    GET api/comprofile/me
// @desc     Get current users company profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const comprofile = await ComProfile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!comprofile) {
      return res
        .status(400)
        .json({ msg: 'There is no company profile for this user' });
    }

    res.json(comprofile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/comprofile
// @desc     Create or update company profile
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('companyname', 'Company name is required')
        .not()
        .isEmpty(),
      check('description', 'Description is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      companyname,
      website,
      location,
      address,
      tagline,
      industries,
      description,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin
    } = req.body;

    // Build comprofile object
    const comProfileFields = {};
    comProfileFields.user = req.user.id;
    if (companyname) comProfileFields.companyname = companyname;
    if (website) comProfileFields.website = website;
    if (location) comProfileFields.location = location;
    if (address) comProfileFields.address = address;
    if (tagline) comProfileFields.tagline = tagline;
    if (description) comProfileFields.description = description;
    if (industries) {
      comProfileFields.industries = industries
        .split(',')
        .map(industry => industry.trim());
    }

    // Build social object
    comProfileFields.social = {};
    if (youtube) comProfileFields.social.youtube = youtube;
    if (twitter) comProfileFields.social.twitter = twitter;
    if (facebook) comProfileFields.social.facebook = facebook;
    if (linkedin) comProfileFields.social.linkedin = linkedin;
    if (instagram) comProfileFields.social.instagram = instagram;

    try {
      let comprofile = await ComProfile.findOne({ user: req.user.id });

      if (comprofile) {
        // Update
        comprofile = await ComProfile.findOneAndUpdate(
          { user: req.user.id },
          { $set: comProfileFields },
          { new: true }
        );

        return res.json(comprofile);
      }

      // Create
      comprofile = new ComProfile(comProfileFields);

      await comprofile.save();
      res.json(comprofile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/comprofile
// @desc     Get all company profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const comprofiles = await ComProfile.find().populate('user', [
      'name',
      'avatar'
    ]);
    res.json(comprofiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/comprofile/user/:user_id
// @desc     Get company profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const comprofile = await ComProfile.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'avatar']);

    if (!comprofile)
      return res.status(400).json({ msg: 'Company profile not found' });

    res.json(comprofile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Company profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/comprofile
// @desc     Delete company profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
  // TODO:  Update route so only company profile is deleted
  try {
    // Remove user posts
    await Post.deleteMany({ user: req.user.id });
    // Remove profile
    await ComProfile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
