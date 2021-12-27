const router = require("express").Router();
const Driver = require("../models/Driver");
const CryptoJS = require("crypto-js")

//REGISTER

router.post("/register", async (req, res) => {
  const newDriver = new Driver({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
    licenseNumber: req.body.licenseNumber,
    dateOfBirth: req.body.dateOfBirth,
  });
  try {
    const savedDriver = await newDriver.save();
    res.json(savedDriver)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post("/login", async (req,res)=>{
    try{
      const user = await User.findOne
    }
})

module.exports = router
