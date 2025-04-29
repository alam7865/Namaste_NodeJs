const express = require("express");
const connectDB = require("./database");
const User = require("./Model");
const app = express();

app.use(express.json());
app.use("/signup", async (req, res) => {
  const user = new User({
    FirstName: "KK",
    LastName: "Alam",
    EmailId: "alam@gmail.com",
    Password: "alam123",
  });
  await user.save();
  console.log(req.body);
  res.send(req.body);
});

/////////////// add
app.use("/addUser", async (req, res) => {
  // const user = new User({
  //   FirstName: "Bhai",
  //   LastName: "Bhai",
  //   EmailId: "Bhai@gmail.com",
  //   Password: "Bhai123",
  // });
  const user = new User(req.body);
  await user.save();
  res.send("User Added Succesfully");
});

//////////// Print

app.get("/getData", async (req, res) => {
  try {
    const data = await User.find({});
    res.send(data);
  } catch (err) {
    res.status(500).send("Error retrieving data");
  }
});

////////////// Delete
app.get("/getDelete", async (req, res) => {
  const result = await User.deleteMany({ FirstName: "KK" });
  res.send(result);
});

//////////////// Update
app.get("/Update", async (req, res) => {
  const result = await User.findOne({ FirstName: "Bhai" }).updateOne({
    FirstName: "Sabaz",
    LastName: "Alam",
  });
  res.send(result);
});
app.listen(5555, () => {
  console.log("Server Started at port 5555");
});

// connectDB()
//   .then(() => {
//     console.log("DataBase Connection  Established");
//     app.listen(5555, () => {
//       console.log("Server Started at Port 5555");
//     });
//   })
//   .catch((err) => {
//     console.log("DataBase Connection Not Established");
//   });
