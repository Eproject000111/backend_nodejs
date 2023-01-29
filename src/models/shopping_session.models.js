const mongoose = require("mongoose");


const shoppingSessionSchema = new mongoose.Schema({
    userId:{
        required:true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    total:{
        type: mongoose.Schema.Types.Decimal128 
    }
},
{
    timestamps:true
})

const shoppingSession = mongoose.model("shoppingSession", shoppingSessionSchema);

module.exports = shoppingSession;
