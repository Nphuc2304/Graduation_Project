const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
    userId: { type: ObjectId },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    fullName: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: true
    },
    createDay: {
        type: Date,
        default: Date.now
    },
    updateDay: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.user || mongoose.model('user', user);
