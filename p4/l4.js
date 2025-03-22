// let multiply = require("./multiply");
// let x = require("./sum");
// console.log("Hello World");

// console.log("Multiply -------");
// multiply.multiply(10, 10);
// multiply.multiply1(3, 3, 3);
// console.log("SUM -----");

// x.calSum(5, 5);
// x.calSum1(3, 3, 3);

//////////////////////////////////////////////////////
// let multiply = require("./multiply");
let { calSum, calSum1 } = require("./sum");
console.log("Hello World");

// console.log("Multiply -------");
// multiply.multiply(10, 10);
// multiply.multiply1(3, 3, 3);
// console.log("SUM -----");

calSum(5, 5);
calSum1(3, 3, 3);
