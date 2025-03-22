const express = require("express");
const app = express();

// app.use((req, res) => {
//   res.send("Hello ALAM BHAI 1 2 3");
// });

//////////////////////////////////////////////////////////////////
// app.use("/user", (req, res, next) => {
//   //   res.send("Hello User");
//   console.log("USER");
//   next();
//   next();
//   res.send("HI HI");
// });

// app.use("/admin", (req, res, next) => {
//   //   res.send("Hello Admin");
//   console.log("Admin");
// });

// app.use("/student", (req, res, next) => {
//   //   res.send("Hello ALAM Student");
//   console.log("Student");
//   res.send("HI HI 🦐🦐🦐🦐");
// });
// app.listen(1111, () => {
//   console.log("server started at port no 1111");
// });

/////////////////////////////////////////////////////

// app.use("/user", (req, res, next) => {
//   //   res.send("Hello User");
//   console.log("USER");
//   next();
//   //   next();
//   res.send("HI HI");
// });

// (req, res, next) => {
//   //   res.send("Hello Admin");
//   console.log("Admin");
//   next();
// };

// (req, res, next) => {
//   //   res.send("Hello ALAM Student");
//   console.log("Student");
//   res.send("Student 🦐🦐🦐🦐");
// };
// app.listen(1111, () => {
//   console.log("server started at port no 1111");
// });

//////////////////////////////////////////////////////////////

// app.use(
//   "/user",
//   (req, res, next) => {
//     //   res.send("Hello User");
//     console.log("USER");
//     next();
//     next();
//     res.send("HI HI");
//   },
//   (req, res, next) => {
//     //   res.send("Hello Admin");
//     console.log("Admin");
//     // next();
//   },

//   (req, res, next) => {
//     //   res.send("Hello ALAM Student");
//     console.log("Student");
//     // res.send("Student 🦐🦐🦐🦐");
//   }
// );

// app.use("/sabaz", (req, res) => {
//   res.status(401).send("Un Authorized User");
// });

// app.listen(1111, () => {
//   console.log("server started at port no 1111");
// });

///////////////////////////  Authentication /////////////////////////////
// app.use("/admin/getAlldata", (eq, res) => {
//   const token = "xyz";
//   const isAdminAuthorization = token == "xyz";
//   if (isAdminAuthorization) {
//     res.send("All Data Send to Admin");
//   } else {
//     res.status(401).send("UnAuthorized Request Admin");
//   }
// });

// app.use("/student/getAlldata", (eq, res) => {
//   const token = "xyz";
//   const isAdminAuthorization = token == "xyz";
//   if (isAdminAuthorization) {
//     res.send("All Data Send to Student");
//   } else {
//     res.status(401).send("UnAuthorized Request");
//   }
// });

// app.use("/user/getAlldata", (eq, res) => {
//   const token = "xyz";
//   const isAdminAuthorization = token == "xyzz";
//   if (isAdminAuthorization) {
//     res.send("All Data Send to User");
//   } else {
//     res.status(401).send("UnAuthorized Request for User");
//   }
// });
// app.listen(1111, () => {
//   console.log("Server Run on port Number 1111");
// });

//////////////////////////////// user Authentication from another file ///////////////////////

const { userAuth, adminAuth } = require("./auth");
app.get("/user/login", (req, res) => {
  res.send("User Login SuccesFully");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User Data Send");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Send");
});

app.listen(1111, () => {
  console.log("Server started at port 1111");
});
