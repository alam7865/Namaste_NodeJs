// const fs = require("fs");
// const https = require("https");

// const a = 100;

// setImmediate(() => {
//   console.log("Set Immediate called");
// });

// fs.readFile("./sab.txt", "utf-8", () => {
//   console.log("File read Callback");
// });

// setTimeout(() => {
//   console.log("Set Time Out");
// }, 0);

// function A() {
//   console.log("A Called");
// }

// A();
// console.log("a=" + a);

///////////////////////////////// 2nd code /////////////////////////

// const fs = require("fs");
// const https = require("https");

// const a = 100;

// setImmediate(() => {
//   console.log("Set Immediate called");
// });

// fs.readFile("./sab.txt", "utf-8", () => {
//   console.log("File read Callback");
// });

// setTimeout(() => {
//   console.log("Set Time Out");
// }, 0);

// process.nextTick(() => {
//   console.log("Pocess.Next Tick Called");
// });

// // Promise.resolve("promise").then(console.log("Promise Called:"));
// Promise.resolve("promise").then(console.log);
// // Promise.resolve(() => {
// //   console.log("Promise Call 1 2 3 4");
// // });
// function A() {
//   console.log("A Called");
// }

// A();
// console.log("a=" + a);

///////////////////////////////// 3rd code /////////////////////////

// const fs = require("fs");
// const https = require("https");

// setImmediate(() => {
//   console.log("set Immediate");
// });

// setTimeout(() => {
//   console.log("SetTime out 1");
// });

// Promise.resolve("Promise 1").then(console.log);

// fs.readFile("./sab.txt", "utf-8", () => {
//   setTimeout(() => {
//     console.log("SetTime out Inner 1");
//   });

//   process.nextTick(() => {
//     console.log("Inner Next Tick 2");
//   });

//   setImmediate(() => {
//     console.log("Set Immediate Called");
//   });

//   console.log("Inner File Read ");
// });

//////////////////////////////// 4th case /////////////////////////////////

const fs = require("fs");
const https = require("https");

setImmediate(() => {
  console.log("Set Immediate Called");
});

setTimeout(() => {
  console.log("Timer Expired");
});

Promise.resolve("Promise 1").then(console.log);

fs.readFile("./sab.txt", "utf-8", () => {
  console.log("File Read CB");
});

process.nextTick(() => {
  process.nextTick(() => {
    console.log("Inner NextTick Call 1");
  });

  console.log("Inner NextTick 2");
});

console.log("Last Line of the File");
