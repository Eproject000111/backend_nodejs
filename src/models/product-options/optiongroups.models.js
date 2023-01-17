const mongoose = require("mongoose");

const optionsSchema = new mongoose.Schema({
    name:{
        type: String,
        max:50
    },
    optionsGroupId:{
        type:Number    // Here will be relation with optionsGroup
    }
},
{
    timestamps:true
})

const options = mongoose.model("options", optionsSchema);

module.exports = options;
