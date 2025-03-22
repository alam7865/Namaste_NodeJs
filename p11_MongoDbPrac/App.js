const { MongoClient } = require("mongodb");
const url = "mongodb+srv://sabbajalam5:alam@node.w0qph.mongodb.net/";
const client = new MongoClient(url);
const dbName = "HelloWorld";
async function main() {
  await client.connect();
  console.log("Connected Successfully to the Server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  /////////////////////////////   Read
  //   const findResult = await collection.find({ firstName: "Sabaz" }).toArray();
  //   console.log(findResult);

  //////////////////////////  Insert data  ///////////////////////////////
  //   const data = [
  //     {
  //       firstName: "Hassan",
  //       lastName: "Alam",
  //     },
  //     {
  //       firstName: "Hassan",
  //       lastName: "Alam",
  //     },
  //   ];
  //   const result = await collection.insertMany(data);

  ////////////////////////////// Update /////////////////////////////////

  const updatedata = await collection.updateOne(
    { firstName: "Sabaz" },
    { $set: { lastName: "Mohammad" } }
  );

  const res = await collection.find().toArray();
  console.log(res);
  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
