const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const category = new Schema({
    categoryId:{type:ObjectId},
    categoryName:{
        type:String,
        required:true
    }
})
module.exports = mongoose.models.category || mongoose.model('category', category);