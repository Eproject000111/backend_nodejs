let {addressModel,userModel} = require('../../../config/load_db_Table');
const { default: mongoose } = require("mongoose");

const addingUserAddress = async (req,res)=>{

    const {address_line1,address_line2,pincode,state,city,country,mobile,user}  = req.body;
    
    try{
        let params = {
            address_line1: address_line1,
            address_line2: address_line2,
            pincode: pincode,
            state: state,
            city: city,
            country: country,
            mobile: mobile,
            user: user
        }

        let userAddress = new addressModel(params)
        let savedData = await userAddress.save();

        console.log(savedData,"address Data")

        //Adding address id in the userTable to
        let data = await userModel.findByIdAndUpdate({_id:user},{$set:{address: savedData._id}}, {new:true});

        // console.log(data, "updated data")

        if(savedData._id)
        {
            res.status(201).json({
                status: "success",
                error: 'null',
                msg: "user created",
                data: savedData
            })
        }

    }
    catch(error)
    {
        res.status(500).send(error);
    }

}

const getUserWithAddress = async (req,res) => {
    try{
        addressModel.find().populate('user').exec(((err,addressData)=>{
            if(err)
            {
                res.status(400).send("There is error getting address !")
            }
            else{
                res.status(200).json({
                    status: "success",
                    error: 'null',
                    msg: "user created",
                    data: addressData
                })
            }
        }))
    }
    catch(error)
    {
        res.status(500).send(error);
    }
}



module.exports = {
    addingUserAddress,
    getUserWithAddress
}