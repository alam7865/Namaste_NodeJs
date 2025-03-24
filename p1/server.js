// const fs = require("fs");
// const http = require("http");

// // const server = https.createServer(() => {
// //   console.log("Hello");
// //   res.end("Output");
// // });

// const server = http.createServer((req, res) => {
//   console.log("Hello");
//   res.end("Output");
// });

// server.listen(7777, () => console.log("KKKK"));

//////////////////////////////////////////////////////////////////

const { MongoClient } = require("mongodb");
const url = "mongodb+srv://sabbajalam5:alam@node.w0qph.mongodb.net/";
const client = new MongoClient(url);
const dbName = "HelloWorld";
async function main() {
  await client.connect;
  console.log("Connect Successfully to the server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  /////////////// insert user ///////////
  const data = {
    FirstName: "Sabaz Alam",
    School: "HCSB",
  };

  const datas = [
    {
      firstName: "SalMan Khan",
      School: "BGR",
    },
    {
      firstName: "Sohail Khan",
      School: "BGR",
    },
    {
      firstName: "Sabaz Alam",
      School: "BGR",
    },
  ];

  // const insertResult = await collection.insertOne(data);
  const insertResult = await collection.insertMany(datas);
  console.log(insertResult);
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
