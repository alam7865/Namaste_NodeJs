const express = require("express");
const app = express();

// app.get("/*fly$", (req, res) => {
//   // work for any routes containing (a)
//   // we can ignore the (bc)
//   res.send("Spider Man");
// });

// app.get("/*a*", (req, res) => {    // work for any routes containing (a)
//   // we can ignore the (bc)
//   res.send("Spider Man");
// });

// app.get("/a(bc)?d", (req, res) => {   // we can ignore the (bc)
//   res.send("Spider Man");
// });

// app.get("/ab*c", (req, res) => {
//   // can write any thing in place of * eg: abALAMc,abc
//   /// work for ac ,abc
//   // work for
//   res.send("HI HI Hi Hi");
// });

// app.get("/ab+c", (req, res) => {
//   // can write as much as b eg:- abbc,abbbbc,abbbbbbbbc but not :- aabbc or abbbccc
//   /// work for ac ,abc
//   // work for
//   res.send("HI HI Hi Hi");
// });

// app.get("/ab?c", (req, res) => {      /// work for ac ,abc
//   // work for
//   res.send("HI HI Hi Hi");
// });

// app.post("/user", (req, res) => {
//   console.log("Post Has Called");
//   res.send("Post Has Been Called");
// });
// app.use("/a", (req, res) => {
//   res.send("Hello ALAM");
// });
app.use("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({
    firstName: "sabaz",
    LastName: "Alam",
  });
});
app.use("/user", (req, res) => {
  res.send("Hello Alam123");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
