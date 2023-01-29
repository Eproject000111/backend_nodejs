const mongoose = require("mongoose");

//  In the option there can be color, size;

const optionGroupsSchema = new mongoose.Schema({
    name:{
        type: String,
        max:50
    }
},
{
    timestamps:true
})

const optionsGroup = mongoose.model("optionsGroup", optionGroupsSchema);

module.exports = optionsGroup;
