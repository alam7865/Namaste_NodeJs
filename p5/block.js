const fs = require("fs");
const https = require("https");

// const data = fs.readFileSync("./txt/data1.txt", "utf-8");
fs.readFile("./txt/data1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Some Thing went Wrong");
  } else {
    console.log("Data Read Successfully");
  }
});
// console.log(data);

console.log("Hello");
