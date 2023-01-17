const mongoose = require("mongoose");

//  In the option there can be color, size;

const orderDetailsSchema = new mongoose.Schema({
    orderId:{
        type: Number  // here will be the relation with order
    },
    productId:{
        type:Number // here will be the relation with product
    },
    paymentId:{
        type:Number // here will be the relation with payment
    },
    name:{
        type: String
    },
    price:{
        type: Number
    },
    sku:{
        type:String
    },
    quantity:{
        type: Number
    }
},
{
    timestamps:true
})

const orderDetails = mongoose.model("orderDetails", orderDetailsSchema);

module.exports = orderDetails;
