const router = require("express").Router();
const Driver = require("../models/Driver");
const CryptoJS = require("crypto-js");

//REGISTER

router.post("/register", async (req, res) => {
  const newDriver = new Driver({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
    licenseNumber: req.body.licenseNumber,
    dateOfBirth: req.body.dateOfBirth,
  });
  try {
    const savedDriver = await newDriver.save();
    res.json(savedDriver);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await Driver.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong credentials");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const password = hashedPassword.toString(CryptoJS.enc.Utf8)
    password !== req.body.password && res.status(401).json("Wrong credentials");
    res.status(200).json(user);
  } catch(err) {
    res.json(err)
  }
});

module.exports = router;
