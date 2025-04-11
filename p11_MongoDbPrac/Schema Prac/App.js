const express = require("express");
// const User = require("./Model");
// const connectDB = require("./database");
const app = express();

// app.post();
app.get("/user", (req, res) => {
  console.log("Hi its Sabaz Alam");
  res.end("HHHHHHH");
});

app.listen(7777, () => {
  console.log("Server started at port 7777");
});
