const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min:10,
        max:255
    },
    email:{
      type: String,
      required:true,
      min:4,
      max:255
    },
    mobile:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    role_id:{
        type:Number,
        default:1,
    },
    isDelete:{
        type:Number,
        default:0,
    },
    auth_token:{
        type:String,
        default:null,
        min:4,
        max:255
    },
    date:{
        type:Date,
        default:Date.now()
    },
    // address:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'Address'
    // }]
    
},
{
    timestamps:true
})

const User = mongoose.model("User", userSchema);

module.exports = User