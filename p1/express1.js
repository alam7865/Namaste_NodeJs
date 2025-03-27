const express = require("express");
const app = express();
app.use("/users", (req, res) => {
  res.send("Hello Alam Bhai😊😊");
});
// app.get("/About", (req, res) => {
//   res.send("This is About Section");
// });

app.get("/*fly$", (req, res) => {
  // console.log("HHHHH");
  res.send("This is Contact Section");
});

app.get("/Address", (req, res) => {
  res.send("This is Address Section");
});

// app.get("/Home", (req, res) => {
//   res.send("This is Home Section");
// });
app.listen(7777, () => {
  console.log("Server started at port 7777");
});
