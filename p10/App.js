const express = require("express");
const User = require("./src/models/user");
const connectDB = require("./src/config/database");
const app = express();

// app.post("./user", async (req, res) => {
//   const userObj = {
//     firstname: "Sabaz",
//     lastName: "Alam",
//     passWord: "sabaz1234",
//   };

//   const user = new User(userObj);
//   await user.save();
//   res.send("User Added SuccessFully");
// });
// conectDB()
//   .then(() => {
//     console.log("DataBase Connected SuccessFully");
//     // app.get("/user", (req, res) => {
//     //   console.log("Hello Minoxidil");
//     //   res.send("🦐🦐🦐🦐");
//     // });
//     app.listen(1122, () => {
//       console.log("HHHHHHHHH");
//     });
//   })
//   .catch((err) => {
//     console.log("DataBase Not Connected");
//   });
app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Sabaz",
    lastName: "Alam",
    emailId: "akshay@sani.com",
    password: "sabaz123",
  };

  const user = new User(userObj);
  await user.save();

  res.send("User added Successfully!!!");
});
connectDB()
  .then(() => {
    console.log("Database Connection Established.....");
    app.listen(3000, () => {
      console.log("Server Started at port 3000");
    });
  })
  .catch((err) => {
    console.log("DataBase cannot be connected");
  });
