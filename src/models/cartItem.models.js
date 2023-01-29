const mongoose = require("mongoose");


const cartItemSchema = new mongoose.Schema({
    sessionId:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "shoppingSession"
    },
    productId:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    provider:{
        type: String
    },
    quantity:{
        type: Number
    }
},
{
    timestamps:true
})

const cartItem = mongoose.model("cartItem", cartItemSchema);

module.exports = cartItem;
