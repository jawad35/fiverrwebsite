const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const config = require("config");
const auth = require("../middleware/auth");
const User = require("../models/User");
const Profile = require("../models/Profile");

router.use(cors());

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post(
  "/register",
  [
    check("email", "Email is required")
      .isEmail()
      .exists()
      .trim()
      .normalizeEmail(),
      

    check("password", "password is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/,
        "i"
      )
      .withMessage(
        "Password must include one lowercase character, one uppercase character, a number, and a special character."
      ),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email,username, password, fullName, phoneNumber,role } = req.body;
    
    try {
      //check if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(405)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      let userName = await User.findOne({ username });

      if (userName) {
        return res
          .status(405)
          .json({ errors: [{ msg: "Username is taken" }] });
      }

      user = new User({
        email,
        password,
        username,
        role
      });

      await user.save();
      let profile = user;
      profile = new Profile({
        user: user._id,
        fullName: fullName,
        phoneNumber: phoneNumber,
        role:role
      });

      await profile.save();
      return res.json("Account created successfully");
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),

    check("password", "Password is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { password, onlineStatus } = req.body;
    let { email } = req.body;
    email = email.toLowerCase();
    try {
      //check if user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //check if password matches
      //const isMatch = await compare(password, user.password)

      if (password != user.password) {
        return res
          .status(404)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //Return jsonwebtoken
      const payload = {
        user: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
          role:user.role,
          username:user.username,
          phoneNumber: user.phoneNumber,
        },
      };

      const profileFields = {};
      profileFields.onlineStatus = "online";
     

      var profile = await Profile.findOne({ user: user._id });
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: user._id },
          { $set: profileFields },
          { new: true }
        );
      } else {
        profile = new Profile(profileFields);
        await profile.save();
      }

      
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) console.log({ err });
          return res.json({
            token,
            user: payload.user,
            profile: profile,
            
           
          });
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/users/logout
// @desc    Logout User
// @access  Public
router.post("/logout", auth, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    //check if user exists
    let user = await User.findOne({ _id: req.user._id });
    if (!user) {
      return res.status(404).json({ errors: [{ msg: "User not found" }] });
    }

    const profileFields = {};
    profileFields.onlineStatus = "offline";

    var profile = await Profile.findOne({ user: req.user._id });
    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user._id },
        { $set: profileFields },
        { new: true }
      );
      return res.json("Logout Successfully");
    } else {
      profile = new Profile(profileFields);
      await profile.save();
      return res.json("Logout Successfully");
    }
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});




router.post("/customer", async (req, res) => {
  
  try{ 
    const customer = new Customer(req.body);
   
    const data = await customer.save();
    const user={
      fullName:data.first_name+" "+data.last_name,
      phoneNumber:data.body.phone,
      email:data.email
    }
    const profile= new Profile(user)
      const profileData=await profile.save()
      console.log(profileData)
      const token = await customer.generateAuthToken();
      res.status(201).send({ data, token,profileData });
    } catch (error) {
      res.status(401).send({
        error: true,
        message: error.message,
        code: error.code,
      });
    }
  });
module.exports = router;
