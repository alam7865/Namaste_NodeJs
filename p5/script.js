// const { error } = require("console");
const fs = require("fs");
const https = require("https");

// const f1 = fs.readFileSync("./txt/sab.txt", "utf-8");
// console.log(f1);

///////////////////// using try catch //////////////
// try {
//   const data = fs.readFileSync("./txt/sabtxt", "utf-8");
//   console.log("Data: " + data);
// } catch {
//   console.log("Error: " + error);
// }

//////////////////////// Asynchrous read File ///////////////////////

// fs.readFile("./txt/sabtxt", (error, data) => {
//   if (error) {
//     console.log("Some thing Went Wrong");
//   } else {
//     console.log("data: " + data);
//   }
// });

//////////////////////////////////////////////////////////////////////
/////////////////////// Write File Synchronous ///////////////////////

// fs.writeFileSync("./txt/tt.txt", "Hello Alam Bhai");

////////////////////// Above using Try Catch ////////////////////////

// try {
//   fs.writeFileSync("./txt/data1.txt", "Hello Bhai");
//   console.log("Inserted Successfully");
// } catch {
//   console.log("Error Occured");
// }

//////////////////////Write file Asynchronous ////////////////////////

// fs.writeFile("./txt/data2.txt", "Hello Hello", (err) => {
//   if (err) {
//     console.log("Error Occured");
//   } else {
//     console.log("File write  Successfully");
//   }
// });

////////////////////////// Https request ////////////////////////////

// https.get("https://dummyjson.com/products/1", (res) => {
//   // console.log(res);
//   console.log("Data Fetch Successfully");
// });

// setTimeout((e) => {
//   console.log("Hi");
// }, 3000);

//////////////////////////////////////////////////////////////////////
//////////////////////// check //////////////////////////////////////

let a = 5;
let b = 2;

console.log("Hello");

multiply(a, b);

https.get("https://dummyjson.com/products/1", "utf-8", (res) => {
  console.log("Data Fetch Successfully");
});

setTimeout((e) => {
  console.log("Timer Expire after 4 sec");
}, 4000);

////// read File Asynchronous ///////////////////
fs.readFile("./txt/sab.txt", "utf-8", (err) => {
  if (err) {
    console.log("Error Occured");
  } else {
    console.log("Successfully Read");
  }
});
function multiply(a, b) {
  console.log(a * b);
}
