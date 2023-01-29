const mongoose = require("mongoose");

//  In the option there can be color, size;

const orderDetailsSchema = new mongoose.Schema({
    orderId:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,  // here will be the relation with order
        ref: 'orders'
    },
    productId:{
        required: true,
        type:mongoose.Schema.Types.ObjectId, // here will be the relation with product
        ref: 'product'
    },
    paymentId:{
        required: true,
        type:mongoose.Schema.Types.ObjectId, // here will be the relation with payment Details
        ref: 'paymentDetails'
    },
    name:{
        type: String
    },
    price:{
        type: mongoose.Schema.Types.Decimal128
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
