const express = require("express");
const connectDB = require("./src/config/database");
const User = require("./src/models/user");
const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Sabaz",
    lastName: "Alam",
    emailId: "sabbajalam5@gmail.com",
    password: "sabaz1234",
  });

  await user.save();
  res.send("User Added Successfully");
});
connectDB()
  .then(() => {
    console.log("DataBase connected Established..");
    app.listen(7777, () => {
      console.log("Server started at port 7777");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
