const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    orderUserId:{
        type: Number // here is the relation with user
    },
    orderAmount:{
        type: Number
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
        type: Number
    },
    orderTax:{
        type: Number
    },
    orderEmail:{
        type: Number
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