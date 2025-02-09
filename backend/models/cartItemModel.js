const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const cartItem = new Schema({
    cartItemId:{type:ObjectId},
    quantity:{
        type: Number,
        min:1
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
        type: Boolean,
        default: false
    },
    varient:{
        type:String
    },
    productId:{
        type: ObjectId,
        ref: 'product',
        required: true,
        
    },
    cartId:{
        type: ObjectId,
        ref: 'cart',
        required: true,
    }
})
module.exports = mongoose.models.cartItem || mongoose.model('cartItem', cartItem);