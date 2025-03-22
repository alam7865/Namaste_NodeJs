const fs = require("fs");

function sss(x) {
  setTimeout(() => {
    console.log(x);
  }, 3000);
}
sss("helllo");

try {
  const data = fs.readFileSync("./txt/ss.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error("Error reading the file:", err);
}

// const data = fs.readFileSync("./txt/sab.txt", "utf-8");
// console.log(data);

// function sss(x) {
//   setTimeout(() => {
//     console.log(x);
//   }, 3000);
// }
// sss("helllo");

// try {
//   const data = fs.readFileSync(".txt/ss.txt", "utf-8");
//   console.log(data);
// } catch {
//   console.log(Error);
// }

////////////     Synchronous write file  //////////////////////////

// const data = "Hello Alam";
// fs.writeFileSync("./txt/about.txt", data, "utf-8");

// ////////////////////  Above using Try Catch //////////////////////

// const contact = "My Contact Number Is :6002744852";
// try {
//   fs.writeFileSync("./tx/contact.txt", contact, "utf-8");
// } catch {
//   console.log(Error);
// }

///////
////////////////////////// Read File Asynchronous ///////////////////

// fs.readFile("./txt/ss.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Some Error Occured");
//   } else {
//     console.log(data);
//   }
// });

///////
/////////////////////////// Write File Asynchronous ///////////////////

// const address = "I live in Assam and PIN: 783390";
// fs.writeFile("", address, "utf-8", (err) => {
//   if (err) {
//     console.log("SOme Error Occured");
//   } else {
//     console.log("File Write Successfully");
//   }
// });
