const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const product = new Schema({
    productId: { type: ObjectId },
    productName: {
        type: String,
        required: true
    },
    description: { type: String },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    addDay: {
        type: Date,
        default: Date.now
    },
    updateDay: {
        type: Date,
        default: Date.now
    },
    imgUri: { type: String },
    brandName: { type: String },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
});

product.pre('findOneAndUpdate', function(next){
    this.set({ updateDay: Date.now() });
    next();
});

module.exports = mongoose.models.product || mongoose.model('product', product);