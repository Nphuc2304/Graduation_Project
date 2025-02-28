var express = require('express');
var router = express.Router();
var subCate = require('../models/subCateModel');
var category = require("../models/categoryModel");

router.post("/add", async (req, res) => {
    try {
        const {subCateName, subCateImage, categoryId} = req.body;
        const subCateExist = await subCate.findOne({subCateName : subCateName});
        
        if(subCateExist){
            return res.status(200).json({status: false, message:"The subCategory is existed"});
        };

        const newSubCate = new subCate({
            subCateName, 
            subCateImage, 
            categoryId
        });

        await newSubCate.save();
        return res.status(200).json({status:true, message:`Add new Category: ${subCateName} success`});

    } catch (error) {
        return res.status(400).json({status: false, message:"Have an error: " + error});
    }
});

router.get("/get", async (req, res) => {
    try {
        const {categoryId} = req.query;
        const categoryExist = await category.findOne({_id: categoryId})
        if (categoryExist){
            const listSubCate = await subCate.find({categoryId});
            if(listSubCate){
                return res.status(200).json({status: true, subCate: listSubCate});
            }
        }else{
            return res.status(200).json({status: false, message:"The category is not exist"});
        }
        
    } catch (error) {
        return res.status(400).json({status: false, message:"Have an error" + error});
    }
})

module.exports = router;
