const mongoose = require("mongoose");


const userPaymentSchema = new mongoose.Schema({
    userId:{
        type: Number  // here will be the relation with user
    },
    paymentType:{
        type:String 
    },
    provider:{
        type: String
    },
    account_no:{
        type: Number
    },
    expiry:{
        type:Date
    }
},
{
    timestamps:true
})

const userPayment = mongoose.model("userPayment", userPaymentSchema);

module.exports = userPayment;
