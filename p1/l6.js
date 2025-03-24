const fs = require("fs");
const https = require("https");

const a = 10;
const b = 20;

// https.get("https://dummyjson.com/products/1", (req, res) => {
//   console.log(req.toString());
// });

console.log("Hello");

//// Read File
// fs.readFile("./Text/kk.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// const data = fs.readFileSync("./Text/kk.txt", "utf-8");
// console.log(data);

////////// Write File //////////
// fs.writeFile("./Text/goku.txt", "Hello Goku", "utf-8", (err) => {
//   if (err) {
//     console.log("There is Some Problem");
//     return;
//   } else {
//     console.log("File Read Successfully");
//   }
// });

fs.writeFileSync("./Text/goku1.txt", "Hello Goku1", "utf-8");

console.log("HHHHHHH");
setTimeout(() => {
  console.log(5 * 6);
}, 2000);
