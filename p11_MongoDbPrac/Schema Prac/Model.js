const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  FirstName: {
    type: "String",
  },

  LastName: {
    type: "String",
  },
  EmailId: {
    type: "String",
  },

  Password: {
    type: "String",
  },
  Age: {
    type: "String",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
