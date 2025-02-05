const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const cartItem = new Schema({
    cartItemId:{type:ObjectId},
    quantity:{
        type: Number
    },
    price:{
        type: Number
    },
    discount:{
        type:Number
    },
    totalPrice:{
        type:Number
    },
    status:{
        type: Boolean
    },
    varient:{
        type:String
    },
    productId:{
        type: ObjectId,
        ref: 'products',
        required: true,
        unique: true
    },
    cartId:{
        type: ObjectId,
        ref: 'carts',
        required: true,
        unique: true
    }
})
module.exports = mongoose.models.cartItem || mongoose.model('cartItem', cartItem);