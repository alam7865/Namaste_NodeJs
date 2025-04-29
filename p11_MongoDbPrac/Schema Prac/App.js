const express = require("express");
const User = require("./Model");
const connectDB = require("./database");
const app = express();

/////////////////////////////////////////////////////////////////////
// app.use(express.json());
// app.post("/signup", async (req, res) => {
//   const user = new User({
//     FirstName: "Sabaz",
//     LastName: "Alam",
//     EmailId: "sabbajAlam34@gmail.com",
//     Password: "sabaz1234",
//   });

//   await user.save();
//   res.send("User Login Successfully123");
// });

app.use(express.json());
app.post("/signup", async (req, res) => {
  try {
    const user = new User({
      FirstName: "Sabaz",
      LastName: "Alam",
      EmailId: "sabbajAlamsss5@gmail.com",
      Password: "sabaz1234",
    });

    await user.save();
    console.log(req.body);
    res.send("User Created Successfully");
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).send("Error creating user");
  }
});
connectDB()
  .then(() => {
    console.log("DataBase Connection  Established");
    app.listen(7777, () => {
      console.log("Server Started at Port 7777");
    });
  })
  .catch((err) => {
    console.log("DataBase Connection Not Established");
  });

///////////////////////////////////////////////////////////

// const express = require("express");
// const app = express();

// // app.use(express.json());
// let user = [
//   {
//     FirstName: "Sabaz",
//     LastName: "Alam",
//     EmailId: "sabazalam123@gmail.com",
//     Password: "sabaz1234",
//   },
//   {
//     FirstName: "Ayesha",
//     LastName: "Khan",
//     EmailId: "ayeshakhan456@gmail.com",
//     Password: "ayesha456",
//   },
//   {
//     FirstName: "Rohan",
//     LastName: "Mehta",
//     EmailId: "rohanmehta789@gmail.com",
//     Password: "rohan789",
//   },
//   {
//     FirstName: "Priya",
//     LastName: "Singh",
//     EmailId: "priyasingh234@gmail.com",
//     Password: "priya234",
//   },
//   {
//     FirstName: "Arjun",
//     LastName: "Verma",
//     EmailId: "arjunverma101@gmail.com",
//     Password: "arjun101",
//   },
// ];

// const data = {
//   FirstName: "KK",
//   LastName: "KK",
//   EmailId: "KK@gmail.com",
//   Password: "arjun101",
// };
// // app.get("/user", (req, res) => {
// //   // const data = req.body;
// //   // / insert
// //   user.push(data);
// //   res.send(user);
// //   // delete
// //   // data.filter((u) => {
// //   //   data = data.EmailId !== "sabazalam123@gmail.com";
// //   // });
// //   // res.send(data);
// // });

// ////// delete
// // app.post("/delete", (req, res) => {
// //   user = user.filter((u) => u.EmailId !== "sabazalam123@gmail.com");
// //   return res.send(user);
// // });

// // app.post("/delete", (req, res) => {
// //   user = user.filter((u) => u.EmailId !== "sabazalam123@gmail.com");
// //   res.send(user);
// // });

// ////// Update

// app.post("/delete", (req, res) => {
//   user = user.map((u) => {
//     if (u.EmailId === "sabazalam123@gmail.com") {
//       return { ...u, EmailId: "123@gmail.com" };
//     }
//     return u;
//   });
//   res.send(user);
// });

// app.listen(7777, () => {
//   console.log("Server started at Port 7777");
// });
