// const https = require("https");
// const data = https.get("https://jsonplaceholder.typicode.com/todos/3");
// const res = data.JSON();
// console.log(res);

//////////////////////////////////////////////////////////////
// const https = require("https");
// https.get("https://jsonplaceholder.typicode.com/todos/3", (res) => {
//   console.log(res);
// });

////////////////////////////////////////////////////

// const https = require("https");
// https.get("https://jsonplaceholder.typicode.com/todos/3", (res) => {
//   res.on("data", (data) => {
//     console.log(data.toString()); // Minimal change - just print the data
//   });
// });

const https = require("https");

https.get("https://jsonplaceholder.typicode.com/todos", (res) => {
  let data = "";

  // Collect data chunk by chunk
  res.on("data", (chunk) => {
    data += chunk;
  });

  // Process data when response ends
  res.on("end", () => {
    console.log(JSON.parse(data)); // Logs the actual JSON data
  });
});
