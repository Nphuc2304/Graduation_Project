var express = require('express');
var router = express.Router();
var cart = require('../models/cartModel');
var cartItem = require('../models/cartItemModel');

router.get("/getCart/:userId", async (req, res) => {
    try{
        const {userId} = req.params;
        const cartUser = await cart.findOne({userId: userId});
        if(!cartUser){
            return res.status(200).json({ status: true, message: `Không tìm thấy giỏ hàng của user ${userId}` });
        }

        return res.status(200).json({
            status: true,
            message: "Lấy thông tin giỏ hàng thành công",
            cart: cartUser._id
        });
        
        
    }catch (error) {
        res.status(400).json({ status: false, message: 'Có lỗi xảy ra: ' + error });
    }
})

module.exports = router;
