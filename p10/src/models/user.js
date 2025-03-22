const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstName: {
    type: "String",
  },

  lastName: {
    type: "String",
  },
  passWord: {
    type: "String",
  },
  age: {
    type: "Number",
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
