const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const driverAuthRoute = require("./routes/driverAuth");

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DBconnection successful!");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/auth", driverAuthRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running");
});
