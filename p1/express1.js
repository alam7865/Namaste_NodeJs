const express = require("express");
const app = express();
// app.use("/users", (req, res) => {
//   console.log(req.query);
//   res.send("Hello Alam Bhai😊😊");
// });
// app.get("/About", (req, res) => {
//   res.send("This is About Section");
// });

// app.get("/*fly$", (req, res) => {
//   // console.log("HHHHH");
//   res.send("This is Contact Section");
// });

// app.get("/Address", (req, res) => {
//   res.send("This is Address Section");
// });

// app.get("/Home", (req, res) => {
//   res.send("This is Home Section");
// });

/////////////////////////// Dynamic routing
// app.get("/users/:userid/:userName/:userPassword", (req, res) => {
//   console.log("Hello");
//   res.send(req.params);
// });/

/////////////////////////////// Multiple routes /////////////////////
// app.get(
//   "/user",
//   (req, res, next) => {
//     next();
//     console.log("Calling Route 1");

//     // res.send("Called Route 1");
//   },
//   (req, res, next) => {
//     next();
//     console.log("Calling Route 2");
//     // res.send("Called Route 2");
//   },
//   (req, res, next) => {
//     console.log("Calling Route 3");
//     res.send("Called Route 3");
//   }
// );

app.get(
  "/user",
  (req, res, next) => {
    res.send("Response 1");
    console.log("Hello 1");
    next();
  }
  // (req, res) => {
  //   console.log("Response 2");
  //   res.send("response 2");
  // }
);
app.listen(7777, () => {
  console.log("Server started at port 7777");
});
