const mongoose = require("mongoose");

const conectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sabbajalam5:alam@cluster0.yqupy.mongodb.net/HelloWorld"
  );
};

module.exports = conectDB;
