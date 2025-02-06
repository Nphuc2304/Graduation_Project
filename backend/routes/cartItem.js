var express = require('express');
var router = express.Router();
var Cart = require("../models/cartModel");
var Item = require('../models/cartItemModel');
var Product = require('../models/productModel');

router.post('/addItem', async (req, res) => {
    try{
        const {cartId, productId, quantity} = req.body;
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found" });

        let cartItem = await Item.findOne({ cartId, productId });

        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cartItem = new Item({ cartId, productId, quantity, price: product.price });
        }

        await cartItem.save();
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/getItem", async (req, res) => {
    try {
        const {cartId} = req.body;
        const item = await Cart.findOne({cartId : cartId});
        const cartItems = await Item.find({cartId}).populate("productId");
        res.status(200).json({data: cartItems});
    } catch (error) {
        res.status(400).json({error: error})
    }
});


module.exports = router;
