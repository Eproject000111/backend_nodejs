const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    role_type:{
        type: String,
    },
    permissions:{
      type: String,
    }
},
{
    timestamps:true
})

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;