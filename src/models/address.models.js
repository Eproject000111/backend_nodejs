const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    address_line1:{
        type: String,
        default:null,
        min:10,
        max:255
    },
    address_line2:{
      type: String,
      default: null,
      min:4,
      max:255
    },
    pincode:{
        type:Number,
        default:0000
    },
    state:{
        type:String,
        default:null,
        min:6,
        max:255
    },
    city:{
        type:String,
        default:null
    },
    country:{
        type: String,
        default: 'India'
    },
    mobile:{
        type:Number,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},
{
    timestamps:true
})

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;