// // const fs = require("fs");
// process.env.UV_THREADPOOL_SIZE = 2;
// const crypto = require("crypto");

// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//   console.log("1-cryptoPBKDF2 Done");
// });

// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//   console.log("2-cryptoPBKDF2 Done");
// });

// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//   console.log("3-cryptoPBKDF2 Done");
// });

// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//   console.log("4-cryptoPBKDF2 Done");
// });

// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//   console.log("5-cryptoPBKDF2 Done");
// });
// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//   console.log("6-cryptoPBKDF2 Done");
// });

///////////////////////////////////////////////////////

const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE = 2;
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1-cryptoPBKDF2 Done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2-cryptoPBKDF2 Done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3-cryptoPBKDF2 Done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4-cryptoPBKDF2 Done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("5-cryptoPBKDF2 Done");
});
