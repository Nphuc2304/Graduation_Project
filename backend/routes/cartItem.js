var express = require('express');
var router = express.Router();
var Cart = require("../models/cartModel");
var Item = require('../models/cartItemModel');
var Product = require('../models/productModel');

router.post('/addItem', async (req, res) => {
    try {
        const { cartId, productId } = req.body;

        if (!cartId || !productId) {
            return res.status(400)
                .json({ status: false, message: "Cart and Product is required" });
        };

        const cart = await Cart.findById(cartId);
        if (!cart) {
            return res.status(400)
                .json({ status: false, message: "Cart not found" });
        };

        // find the product in db
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(400)
                .json({ status: false, message: "Product not found" });
        };
        // find if the product is exist in the cart
        const cartItem = await Item.findOneAndUpdate(
            { cartId, productId },
            {
                $inc: { quantity: 1 },
                $setOnInsert: { price: product.price, status: true }
            },
            {
                new: true,
                upsert: true
            }

        );

        const allCartItem = await Item.find({ cartId });
        const totalPrice = allCartItem.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        cart.totalPrice = totalPrice;
        cart.finalPrice = totalPrice - (totalPrice * cart.discount);
        await cart.save();

        return res.status(200).json({
            status: true,
            message: "Thêm sản phẩm vào giỏ hàng thành công",
            data: {
                cartItem,
                cartTotal: {
                    totalPrice: cart.totalPrice,
                    discount: cart.discount,
                    finalPrice: cart.finalPrice
                }
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.get("/getItem", async (req, res) => {
    try {
        const { cartId } = req.body;
        const item = await Cart.findOne({ cartId: cartId });
        const cartItems = await Item.find({ cartId }).populate("productId");
        res.status(200).json({ data: cartItems });
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

router.delete("/deleteItem", async (req, res) => {
    try {
        const { cartId, itemId } = req.body;
        const cart = await Cart.findOne({ cartId: cartId });
        const item = await Item.findByIdAndDelete( itemId );
        if (!item) {
            res.status(200).json({ status: false, message: "Sản phẩm không tồn tại!!!" });
        }
        else {
            res.status(200).json({ status: true, message: `Xóa sản phẩm ${itemId} từ giỏ hàng ${cartId} thành công` });
        }
    } catch (error) {
        res.status(400).json({ error: error })

    }
})


module.exports = router;
