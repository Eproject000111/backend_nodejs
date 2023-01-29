let {userModel} = require('../../../config/load_db_Table');
const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// let createSuperUser = async (req, res) => {
//     let { name, mobile, email, password} = req.body;

//     if (name != undefined && mobile != undefined, email != undefined && password != undefined) {
//         try {
//             let isUserExitOnEmail = await userModel.findOne({ email: email });
//             if (isUserExitOnEmail) {
//                 res.status(400).json({
//                     msg: "email already exit"
//                 })
//             }
//             else {
//                 const salt = await bcrypt.genSalt(10);
//                 const hashPass = await bcrypt.hash(password, salt);

//                 let userData = {
//                     name:name,
//                     mobile:mobile,
//                     email:email,
//                     password:hashPass
//                 }
//                 const user = new userModel(userData);
//                 let saveUser = await user.save();

//                 if (saveUser._id) {
//                 //     let AddressData = {
//                 //         area1:area1,
//                 //         area2:area2,
//                 //         pincode:pincode,
//                 //         state:state,
//                 //         city:city,
//                 //         user:saveUser._id
//                 //     }
//                 // const address = new addressModel(AddressData);
//                 // let saveAddress = await address.save();
//                 // if(saveAddress._id)
//                 // {
//                 //     let updatval = await userModel.Update({_id:saveUser._id},{address:saveAddress._id});
//                 //     console.log(updatval)
//                 // }
//                     res.status(201).json({
//                         status: "success",
//                         error: 'null',
//                         msg: "user created",
//                         data: saveUser
//                     })
//                 }

//             }
//         }
//         catch (error) {
//             res.status(500).send(error);
//         }

//     }
// }


const deleteUser = async (req, res) => {
    const id = req.params.id;
    if (id != undefined || id != '') {
        try {

            let result = await userModel.findByIdAndDelete({ _id: id });

            if (result) {
                res.status(200).json({
                    status: "success",
                    error: 'null',
                    deleted: true,
                    data: result
                })
            }

        }
        catch (error) {
            res.status(500).send(error);
        }

    }
}

const updateUser = async (req, res) => {
    const {id,firstName, lastName, email } = req.body;
    console.log(req.body)
    if(id != undefined || id != '')
    {
        try{
            // let userData = await userModel.findById({_id:id});

            let dataForUpdate = {
                firstName: firstName,
                email: email,
                lastName: lastName,
            }

            let result = await userModel.findByIdAndUpdate({_id:id},dataForUpdate, {new:true});
            if(result)
            {
                res.status(200).json({
                    status: "success",
                    error: 'null',
                    updated: true,
                    data: result
                })
            }

        }
        catch(error)
        {
            res.status(500).send(error);
        }

    }
}

const refressToken = async (req, res) => {
    const { email, refreshToken } = req.body;
    const user = await userModel.find({email:email});

    const isValid = verifyRefresh(user, refreshToken);

    if (!isValid) {
        return res
            .status(401)
            .json({ success: false, error: "Invalid token,try login again" });
    }
    const accessToken = jwt.sign({ user: user }, process.env.ACCESS_TOKEN_VAR, {
        expiresIn: "1h",
    });

    const refressToken = jwt.sign({ user: user }, process.env.REFRESS_TOKEN_VAR, {
        expiresIn: "2h",
    });
    return res.status(200).json({ success: true, data:user, accessToken:accessToken, refressToken:refressToken });
}

let userSignUp = async(req,res)=>{
    let{firstName,lastName,email,password} = req.body;

    try{

        if(firstName == undefined || lastName == undefined || email == undefined || password == undefined)
        {
            res.status(400).json({
                error:'1',
                msg: 'SomeThing went Wrong !'
            })
            return;
        }

        let isUserExitOnEmail = await userModel.findOne({ email: email });

        if(isUserExitOnEmail)
        {
            res.status(400).json({
                msg: "email already exit"
            })
        }
        else{
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(password, salt);

            let params = {
                firstName:firstName,
                lastName:lastName,
                email:email,
                address: new mongoose.Types.ObjectId,
                password:hashPass
            }

            const user = new userModel(params);
            user.save((err,data)=>{
                if(err)
                {

                }
                else{
                    // let {password,isDelete,auth_token, ...showDataInUI} = data;

                    res.status(201).json({
                        status: "success",
                        error: 'null',
                        msg: "user created",
                        data: data
                    })
                }
            });
        }
    }
    catch(error)
    {
        res.status(500).send(error);
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)

    if (email == undefined && password == undefined) {

        res.status(400).json({
            error:'1',
            msg: 'SomeThing went Wrong !'
        })
        return;
    }
    try {
        const user = await userModel.find({ email: email });
        console.log(user)

        if (!user) return res.status(400).send('Incorrect Email-Id');

        const validPass = await bcrypt.compare(password, user[0].password);

        if (!validPass) return res.status(400).send("Incorrect Password");

        const jwtAccessToken = await jwt.sign({ user: user }, process.env.ACCESS_TOKEN_VAR, { expiresIn: '1h' });
        // res.cookie("token", token, { maxAge: 60000 * 1000 })
        const refreshToken = jwt.sign({ user: user }, process.env.REFRESS_TOKEN_VAR, {
            expiresIn: "3h",
        });

        const userUpdateToken = await userModel.findOneAndUpdate({email:email},{$set:{auth_token:jwtAccessToken}});
        console.log(userUpdateToken,"update token")

        if(userUpdateToken)
        {
            let userShowData = await userModel.findById({_id:userUpdateToken._id});

            res.status(200).json({
                status: 'success',
                error: 'null',
                msg: "login success",
                data: userShowData,
                accessToken: jwtAccessToken,
                refressToken: refreshToken
            })
        }

    }
    catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

const getAllUser = async(req,res) => {
        try {
        let AllUsersData = await userModel.find({});

        if (AllUsersData) {
            res.status(200).json({
                status: "success",
                error: 'null',
                data: AllUsersData
            })
        }

    }
    catch (error) {
        res.status(500).send(error);
    }

}

const getUserWithAddress = (req,res) => {
    try{
        userModel.find().populate('address').exec(((err,Val)=>{
            if(err)
            {
                res.status(400).send("There is error getting address !")
            }
            else{
                res.status(200).json({
                    status: "success",
                    error: 'null',
                    msg: "user created",
                    data: Val
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
    // createSuperUser,
    // createUser,
    getAllUser,
    deleteUser,
    updateUser,
    loginUser,
    refressToken,
    userSignUp,
    getUserWithAddress
}
