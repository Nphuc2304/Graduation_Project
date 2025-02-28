var express = require('express');
var router = express.Router();
var Category = require('../models/categoryModel');

router.post("/add", async (req, res) => {
    try {
        const {categoryName, categoryImage} = req.body;
        const categoryExist = await Category.findOne({categoryName : categoryName});
        
        if(categoryExist){
            return res.status(200).json({status: false, message:"The category is existed"});
        };

        const newCategory = new Category({
            categoryName,
            categoryImage
        });

        await newCategory.save();
        return res.status(200).json({status:true, message:`Add new Category: ${categoryName} success`});

    } catch (error) {
        return res.status(400).json({status: false, message:"Have an error" + error});
    }
});

router.get("/get", async (req, res) => {
    try {
        const listCategory = await Category.find();
        if(listCategory){
            return res.status(200).json({status: true, categories: listCategory});
        }
        else{
            return res.status(200).json({status: false, message:"The category is null"});
        }
    } catch (error) {
        return res.status(400).json({status: false, message:"Have an error" + error});
    }
})

module.exports = router;
