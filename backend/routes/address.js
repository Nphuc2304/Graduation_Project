var express = require('express');
var router = express.Router();
var address = require('../models/addressModel');
var user = require ('../models/userModel');

router.get("/getAll/:userId", async (req, res) => {
    const {userId} = req.params;
    const userExist = await user.findOne({_id : userId});
    if(!userExist){
        return res.status(400).json({
            message: "User is not exist"
        })
    };
    const addressData = await address.find({userId: userId});
    return res.status(200).json({
        address: addressData
    })
});

router.post("/addAddress", async (req, res)=>{
    const {addressName, phoneNumber, location, addressType, defaultAttribute, userId} = req.body;
    const userExist = await user.findOne({_id : userId});
    if(userExist){
        const newAddress = new address({
            addressName, 
            phoneNumber, 
            location, 
            addressType, 
            defaultAttribute,
            userId
        });
        await newAddress.save();
        return res.status(200).json({
            status: true,
            address: newAddress
        })
    }
    
});

module.exports = router;
