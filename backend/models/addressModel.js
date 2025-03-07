const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const address = new Schema({
    addressName:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    addressType:{
        type:Boolean
    },
    defaultAttribute: {
        type:Boolean,
        default: true
    },
    userId: {
        type: ObjectId,
        ref: 'user',
        required: true,
    },
})
module.exports = mongoose.models.address || mongoose.model('address', address);