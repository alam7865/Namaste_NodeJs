const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sabbajalam5:alam@node.w0qph.mongodb.net/devTinder"
  );
};

connectDB()
  .then(() => {
    console.log("DataBase connected Succesfully");
  })
  .catch((err) => {
    console.log("DataBase Cannot Be Connected");
  });

module.exports = connectDB;
