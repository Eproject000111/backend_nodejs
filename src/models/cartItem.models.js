const mongoose = require("mongoose");


const cartItemSchema = new mongoose.Schema({
    sessionId:{
        type: Number  // here will be the relation with shopping-session
    },
    productId:{
        type:Number 
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
