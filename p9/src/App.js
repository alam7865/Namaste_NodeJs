const express = require("express");
const app = express();

// app.use("/user", (req, res) => {
//   res.send("Hello User");
// });

// app.use("/profile", (req, res) => {
//   res.send("Hello Profile");
// });

// app.use("/address", (req, res) => {
//   res.send("Hello Address");
// });

// app.use("/", (req, res) => {
//   res.send("Hello Bhai No Need To WOrry");
// });

/////////////////////////////////////////////////////
// app.use(
//   "/user",
//   [
//     (req, res, next) => {
//       console.log("Handling Route handler 1");
//       next();
//       next();
//       // res.send("End 1");
//     },
//     (req, res) => {
//       console.log("Handling Route handler 2");
//       // res.send("End 2");
//     },
//   ],
//   (req, res) => {
//     console.log("Handling Route handler 3");
//     // next();
//     res.send("End 3");
//   }
// );

/////////////////////////////// calling individual routes ///////////////////////////
app.use("/user", (req, res, next) => {
  console.log("Calling route Handler 1");
  next();
  next();
  // res.send("Route 1");
});

app.use("/user", (req, res, next) => {
  console.log("Calling route Handler 2");
  // res.send("Route 2");
});

app.use("/users", (req, res, next) => {
  console.log("Calling route Handler 3");
  res.status(401).send("unotherized");
});

app.listen(8000, () => {
  console.log("Server Started at Port No 8000");
});
