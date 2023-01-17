const mongoose = require("mongoose");


const paymentDetailsSchema = new mongoose.Schema({
    orderId:{
        type: Number  // here will be the relation with order
    },
    amount:{
        type:Number 
    },
    provider:{
        type: String
    },
    status:{
        type: String
    }
},
{
    timestamps:true
})

const paymentDetails = mongoose.model("paymentDetails", paymentDetailsSchema);

module.exports = paymentDetails;
