const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sabbajalam5:alam@cluster0.gvmsswf.mongodb.net/devTinder"
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

////////////////////////////////////////////////////////////

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://sabbajalam5:alam@cluster0.gvmsswf.mongodb.net/devTinder",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         serverApi: { version: "1" },
//       }
//     );
//     console.log("Database connected successfully");
//   } catch (err) {
//     console.error("Database connection failed:", err.message);
//   }
// };

// module.exports = connectDB;
