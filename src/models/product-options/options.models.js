const mongoose = require("mongoose");

const optionsSchema = new mongoose.Schema({
    name:{
        type: String,
        max:50
    },
    optionsGroupId:{
        required: true,
        type:mongoose.Schema.Types.ObjectId,    // Here will be relation with optionsGroup
        ref: 'optionsGroup'
    }
},
{
    timestamps:true
})

const options = mongoose.model("options", optionsSchema);

module.exports = options;