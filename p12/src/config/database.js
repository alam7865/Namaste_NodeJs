const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sabbajalam5:alam@node.w0qph.mongodb.net/devTinder"
  );
};
connectDB()
  .then(() => {
    console.log("Database connection Establish....");
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });

module.exports = connectDB;
