const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique:true },
    email: { type: String, required: true, unqiue: true },
    password: { type: String, required: true },
    licenseNumber: { type: String, required: true, unique: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
   