const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require()

//REGISTER

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    licenseNumber: req.body.licenseNumber,
    dateOfBirth: req.body.dateOfBirth,
  });
  try {
    const savedUser = await newUser.save();
    res.json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router
