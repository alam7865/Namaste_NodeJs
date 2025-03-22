const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 102345;
var b = 213457;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Data Fetch Succesfully");
});

setTimeout(() => {
  console.log("SetTimeOut Called After 5 sec");
}, 5000);

const data = fs.readFileSync("./txt/about.txt", "utf-8");
console.log(data);

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiply: " + c);
