const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../modules/products');

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "GET Request to /products"
    });
});

router.post('/', (req, res, next)=>{
    /*const product = {
        name: req.body.name,
        price: req.body.price
    };*/

    const product = new Product({
         _id: new mongoose.Types.ObjectId(),
         name: req.body.name,
         price: req.body.price
    });

    product.save().then(result=> {
        console.log(result);
    }).catch(err=> {
        console.log(err.message);
    });

    res.status(201).json({
        message: "POST Request to /products",
        createdProduct: product
    });
});

router.get('/:productID', (req, res, next)=>{
    const id = req.params.productID;
    res.status(200).json({
        message: 'GET request for productID',
        id: id
    });
});

router.patch('/:productID', (req, res, next)=>{
    res.status(200).json({
        message: 'Updated product'
    });
});

router.delete('/:productID', (req, res, next)=>{
    res.status(200).json({
        message: 'Deleted product'
    });
});

module.exports = router;