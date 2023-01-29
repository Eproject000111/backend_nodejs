const mongoose = require("mongoose");


const paymentDetailsSchema = new mongoose.Schema({
    orderId:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,  // here will be the relation with order
        ref: 'orderDetails'
    },
    amount:{
        type:mongoose.Schema.Types.Decimal128 
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
