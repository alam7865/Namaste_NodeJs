const express = require("express");
const app = express();
app.get("/user", (req, res) => {
  console.log("HHHHHHHHH");
  res.send("Hi Sabaz122345");
});

app.get("/hero", (req, res) => {
  console.log("Hero");
  res.send("Hi Hero");
});

app.get("/apple", (req, res) => {
  console.log("Apple");
  res.send("Hi Apple");
});
app.listen(7777, () => {
  console.log("Server started at port 7777");
});
