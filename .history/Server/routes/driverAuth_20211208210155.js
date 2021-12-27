const router = require("express").Router();
const drive = require("../models/Driver");
const CryptoJS = require("crypto-js")

//REGISTER

router.post("/register", async (req, res) => {
  const newdrive = new drive({
    drivename: req.body.drivename,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
    licenseNumber: req.body.licenseNumber,
    dateOfBirth: req.body.dateOfBirth,
  });
  try {
    const saveddrive = await newdrive.save();
    res.json(saveddrive)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post("/login", async (req,res)=>{
    try{
      const drive = await 
    }
    catch(err){

    }
})

module.exports = router
