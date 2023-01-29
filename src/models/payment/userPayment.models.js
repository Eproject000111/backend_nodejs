const mongoose = require("mongoose");


const userPaymentSchema = new mongoose.Schema({
    userId:{
        required: true,
        type: mongoose.Schema.Types.ObjectId, // here is the relation with user
        ref: 'user'
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
