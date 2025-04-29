const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      require: true,
      // lowercase: true,
      uppercase: true,
      // maxlength: 3,
    },

    LastName: {
      type: String,
      lowercase: true,
    },
    // EmailId: {
    //   type: String,
    //   trim: true,
    //   // set: (v) => v.replace(/\s+/g, " "),
    //   set: (v) => v.replace(/\s+/g, ""),
    //   validate(value) {
    //     if (!validator.isEmail(value)) {
    //       throw new Error("Invalid email address" + value);
    //     }
    //   },
    // },

    EmailId: {
      type: String,
      trim: true,
      set: (v) => v.replace(/\s+/g, ""),
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address: " + value);
        }
      },
    },
    Skill: {
      type: [String],
    },
    Password: {
      type: String,
    },
    Age: {
      type: String,
    },
    Gender: {
      type: String,
      runValidator: true,
      validate(value) {
        if (!["Male", "Female", "Other"].includes(value)) {
          throw new Error("Gender Data is Not Valid");
        }
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
