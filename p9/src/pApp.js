const express = require("express");
const app = express();
app.use("/sabaz", (req, res) => {
  console.log("Hello Bhai");

  res.send("Hello ALam");
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
