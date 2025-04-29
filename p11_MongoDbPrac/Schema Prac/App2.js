const express = require("express");
const User = require("./Model");
const connectDB = require("./database");
const app = express();

// connectDB()
//   .then(() => {
//     console.log("DataBase Connection  Established");
//     app.listen(1111, () => {
//       console.log("Server Started at Port 1111");
//     });
//   })
//   .catch((err) => {
//     console.log("DataBase Connection Not Established");
//   });

app.use(express.json());

/////////////// add
app.use("/add", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("HI");
});

///////////// read
app.use("/read", async (req, res) => {
  const data = await User.find({});
  console.log(data);
  res.send("Hello");
});

///////////// Update

app.use("/update", async (req, res) => {
  // const data = await User.findOne({ FirstName: "SABAZ5555" }).updateOne({
  //   FirstName: "HelloWorld",
  // });

  // // User.save(data);
  // console.log(data);
  // res.send("Update");

  ////////// FindByIdandUpdate
  try {
    const data = await User.findByIdAndUpdate(
      "6810fe65d87db957e59dfe61kkkkkkkkkk",
      {
        LastName: "kk",
      },
      { new: true }
    );
    // User.save(data);
    res.send("Update🦐");
  } catch (err) {
    // console.error(err);
    console.error(err);
    res.status(500).send("Error Occured");
  }
});

app.use("/delete", async (req, res) => {
  const data = await User.deleteOne({ FirstName: "Sabaz Alam" });
  res.send("One Deleted");
});

app.listen(1111, () => {
  console.log("Server stated at port 1111");
});
