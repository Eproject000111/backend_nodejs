const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

let option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 3000
}
// mongoose.connect(process.env.MONGO_DEV_URI, option);

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error: "));

// db.once("open", function () {
//     // console.log("Connected successfully");
//     require('./load_db_Table');
//     console.log("<----------------------server running --------------------->")
// });


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_DEV_URI, option);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  module.exports = {
    connectDB
  }