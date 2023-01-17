const mongoose = require("mongoose");

const proOptionsSchema = new mongoose.Schema({
    name:{
        type: String,
        max:50
    },
    productId:{
        type:Number    // Here will be relation with product
    },
    optionId:{
        type:Number    // Here will be relation with options
    },
    optionsPriceIncrement:{
        type:Number    
    },
    optionsGroupId:{
        type:Number    // Here will be relation with optionsGroup
    }
},
{
    timestamps:true
})

const productOptions = mongoose.model("options", proOptionsSchema);

module.exports = productOptions;
