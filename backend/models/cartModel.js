const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const cart = new Schema({
    cartId:{type:ObjectId},
    totalPrice:{
        type: Number,
        default: 0
    },
    discount:{
        type: Number,
        default: 1
    },
    finalPrice:{
        type:Number,
        default: 0
    },
    userId: {
        type: ObjectId,
        ref: 'user',
        required: true,
        unique: true
    },
})
module.exports = mongoose.models.cart || mongoose.model('cart', cart);