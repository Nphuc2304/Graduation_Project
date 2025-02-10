var express = require('express');
var router = express.Router();
var cart = require('../models/cartModel');
var cartItem = require('../models/cartItemModel');


router.post("/createCart", async (req, res) => {
    try{
        const {userId} = req.body;
        let cartOfUser = await cart.findOne({userId: userId});
        if(!cartOfUser){
            let newCartOfUser = new cart({
                userId: userId
            })
            await newCartOfUser.save();
            res.status(200).json({ status: true, message: `Tạo giỏ hàng cho người dùng ${userId} thành công` });
        }else{
            res.status(200).json({ status: true, message: 'Người dùng đã có giỏ hàng' });
        }
    }catch (error) {
            res.status(400).json({ status: false, message: 'Có lỗi xảy ra: ' + error });
    }
});

router.get("/getAll", async (req, res) => {
    try{
        let {userId} = req.body;
        let cartUser = await cart.findById({userId});
        if(!cartUser){
            res.status(200).json({ status: true, message: `Không tìm thấy giỏ hàng của user ${userId}` });
        }

        const cartItems = await cartItem.find({cartUser}).populate('productId').lean();

        res.status(200).json({
            status: true,
            message: "Lấy thông tin giỏ hàng thành công",
            cart: {
                ...cartUser,
                items: cartItems
            }
        });
        
        
        res.status(200).json({ status: true, message: {cartUser} });
    }catch (error) {
        res.status(400).json({ status: false, message: 'Có lỗi xảy ra: ' + error });
    }
})

module.exports = router;
