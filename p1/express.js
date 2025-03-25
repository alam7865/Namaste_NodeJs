const express = require("express");
const app = express();
app.get("/user", (req, res) => {
  console.log("HHHHHHHHH");
  res.send("Hi Sabaz122345");
});
app.listen(7777, () => {
  console.log("Server started at port 7777");
});
