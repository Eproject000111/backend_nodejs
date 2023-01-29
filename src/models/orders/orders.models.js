const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    userId:{
        required: true,
        type: mongoose.Schema.Types.ObjectId, // here is the relation with user
        ref: 'user'
    },
    orderAmount:{
        type: mongoose.Schema.Types.Decimal128
    },
    orderShipName:{
        type: String
    },
    orderShipAddress:{
        type: String
    },
    orderShipAddress2:{
        type: String
    },
    orderCity:{
        type: String
    },
    orderState:{
        type: String
    },
    orderZip:{
        type: Number
    },
    orderCountry:{
        type: String
    },
    orderShipping:{
        type: mongoose.Schema.Types.Decimal128
    },
    orderTax:{
        type: mongoose.Schema.Types.Decimal128
    },
    orderEmail:{
        type: String
    },
    orderDate:{
        type:Date
    },
    orderShipped:{
        type:Boolean
    },
    orderTrackingNumber:{
        type:String
    }
    // user:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'User'
    // }]
},
{
    timestamps:true
})

const orders = mongoose.model("orders", ordersSchema);

module.exports = orders;