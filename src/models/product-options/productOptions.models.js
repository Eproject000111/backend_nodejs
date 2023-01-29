const mongoose = require("mongoose");

const proOptionsSchema = new mongoose.Schema({
    name:{
        type: String,
        max:50
    },
    productId:{
        required: true,
        type:mongoose.Schema.Types.ObjectId,  
        ref : 'product'
    },
    optionId:{
        required: true,
        type:mongoose.Schema.Types.ObjectId,   
        ref : 'options'
    },
    optionsPriceIncrement:{
        type:mongoose.Schema.Types.Decimal128 
    },
    optionsGroupId:{
        required: true,
        type:mongoose.Schema.Types.ObjectId,   
        ref : 'optionsGroup'
    }
},
{
    timestamps:true
})

const productOptions = mongoose.model("productOptions", proOptionsSchema);

module.exports = productOptions;
