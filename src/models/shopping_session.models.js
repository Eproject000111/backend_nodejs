const mongoose = require("mongoose");


const userPaymentSchema = new mongoose.Schema({
    userId:{
        type: Number  // here will be the relation with user
    },
    total:{
        type:Number 
    }
},
{
    timestamps:true
})

const userPayment = mongoose.model("userPayment", userPaymentSchema);

module.exports = userPayment;
