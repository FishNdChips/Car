const router = require("express").Router();
const Driver = require("../models/Driver");
const CryptoJS = require("crypto-js")

//REGISTER

router.post("/register", async (req, res) => {
  const newDriver = new Driver({
    Drivername: req.body.Drivername,
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
      const Driver = await 
    }
    catch(err){

    }
})

module.exports = router