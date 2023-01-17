const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        max:50
    },
    Longdesc:{
      type: String,
      max:255
    },
    Shortdesc:{
        type: String,
        max:255
    },
    price:{
        type: Number
    },
    SKU:{
        type: String
    },
    stock:{
        type: Number
    },
    image:{
        type:String
    },
    isLive:{
        type: Boolean
    }
},
{
    timestamps:true
})

const product = mongoose.model("product", productSchema);

module.exports = product;