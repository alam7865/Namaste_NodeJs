const express = require("express");
const app = express();

const { adminAuth } = require("./Author");
app.use("/admin", adminAuth, (req, res) => {
  res.send("User login Succesfully");
});

app.get("/about", (req, res) => {
  res.send("This is About Section");
});

app.get("/school", (req, res) => {
  res.send("This is School Section");
});

app.get("/company", (req, res) => {
  res.send("This is company Section");
});

app.get("/", (res, next) => {
  res.send("Some Thing went wrong");
});

// app.use((req, res) => {
//   res.status(404).send("Route not found");
// });

app.listen(7777, () => {
  console.log("HHHPP");
});
