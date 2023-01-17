const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        max:50
    },
    desc:{
        type:String
    }
},
{
    timestamps:true
})

const category = mongoose.model("category", categorySchema);

module.exports = category;