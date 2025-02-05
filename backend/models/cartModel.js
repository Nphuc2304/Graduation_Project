const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const cart = new Schema({
    cartId:{type:ObjectId},
    totalPrice:{
        type: Number
    },
    discount:{
        type: Number
    },
    finalPrice:{
        type:Number
    },
    userId: {
        type: ObjectId,
        ref: 'users',
        required: true,
        unique: true
    }
})
module.exports = mongoose.models.cart || mongoose.model('cart', cart);