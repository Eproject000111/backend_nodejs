const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

let option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 3000
}
mongoose.connect(process.env.MONGO_DEV_URI, option);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
    // console.log("Connected successfully");
    console.log("<----------------------server running --------------------->")
});

//Table Config

require('./../src/models/user_info.models');