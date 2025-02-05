var express = require('express');
var router = express.Router();
var Product = require('../models/productModel');

//get all product
router.get('/all_products', async (req, res) => {
    try {
        const products = await Product.find();

        const dateProduct = products.map(product => ({
            ...product._doc,
            addDay: new Date(product.addDay).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                hour12: false,
            }),
            updateDay: new Date(product.updateDay).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                hour12: false,
            }),
        }));

        res.status(200).json(dateProduct);
    } catch (error) {
        res.status(400).json({ status: false, message: 'Có lỗi xảy ra' });
    }
});

// add new product
router.post('/add_new_product', async (req, res) => {
    try {
        const { name,
            description,
            price,
            stock,
            sold,
            image,
            brandName,
            sale,
            rate
        } = req.body;
        const newProduct = new Product({
            name,
            description,
            price,
            stock,
            sold,
            image,
            brandName,
            sale,
            rate
        });
        const saveProduct = await newProduct.save();

        const dateProdcut = {
            ...saveProduct._doc,
            addDay: new Date(saveProduct.addDay).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                hour12: false,
            }),
            updateDay: new Date(saveProduct.updateDay).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                hour12: false,
            }),
        };
        res.status(200).json(dateProdcut);
    } catch (error) {
        res.status(400).json({ status: false, message: 'Có lỗi xảy ra' });
    }
});

// update product
router.put('/update_product/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const {
            name,
            description,
            price,
            stock,
            sold,
            image,
            brandName,
            sale,
            rate
        } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id,
            {
                name,
                description,
                price,
                stock,
                sold,
                image,
                brandName,
                sale,
                rate,
                updateDay: Date.now()
            }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ status: false, message: 'Sản phẩm không tồn tại' });
        }

        const dateProduct = {
            ...updatedProduct._doc,
            addDay: new Date(updatedProduct.addDay).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                hour12: false,
            }),
            updateDay: new Date(updatedProduct.updateDay).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                hour12: false,
            }),
        };
        res.status(200).json(dateProduct);
    } catch (error) {
        res.status(400).json({ status: false, message: 'Có lỗi xảy ra' });
    }
});

//delete
router.delete('/delete_product/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ status: false, message: 'Sản phẩm không tồn tại' });
        }

        res.status(200).json({ status: true, message: 'Xóa sản phẩm thành công', deletedProduct });
    } catch (error) {
        res.status(400).json({ status: false, message: 'Có lỗi xảy ra' });
    }
});

//sale
router.get('/sale_products', async (req, res) => {
    try {
        const products = await Product.find({ sale: { $gt: 0 } });

        const shuffledProducts = products.sort(() => 0.5 - Math.random());
        const selectedProducts = shuffledProducts.slice(0, 10);

        res.status(200).json(selectedProducts);
    } catch (error) {
        res.status(400).json({ status: false, message: 'Có lỗi xảy ra' });
    }
});

//tìm kiếm phổ biến
router.get('/popular_searches', async (req, res) => {
    try {
        const popularProducts = await Product.find()
            .sort({ searchCount: -1 })
            .limit(6);
        res.status(200).json(popularProducts);
    } catch (error) {
        console.error('Error fetching popular searches:', error);
        res.status(500).json({ status: false, message: 'Có lỗi xảy ra' });
    }
});

module.exports = router;
