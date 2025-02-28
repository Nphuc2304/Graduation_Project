const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const subCate = new Schema({
    subCateId:{type:ObjectId},
    subCateName:{
        type:String,
        required:true
    },
    subCateImage:{
        type:String,
        required:true
    },
    categoryId:{
        type: ObjectId,
        ref: 'category',
        required: true,
    }
})
module.exports = mongoose.models.subCate || mongoose.model('subCate', subCate);