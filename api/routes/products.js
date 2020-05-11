const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../modules/products');


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

router.get('/',(req,res,next)=>{
    Product.find().lean().then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(404).json(err);
    });
});

router.get('/:productID', (req, res, next)=>{
    Product.findById(req.params.productID).exec().then(doc=>{
        res.status(200).json(doc);
    }).catch(err=>{
        res.status(200).json({
            message:"Data doesn't exists"
        });
    });
});

router.patch('/:productID', (req, res, next)=>{
    Product.update({_id: req.body.productID}, {$set:{ name: req.body.name, price: req.body.price}}).then((result)=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(200).json(err);
    })
});

router.delete('/:productID', (req, res, next)=>{
    Product.remove({_id: req.params.productID}).then(result=>{
        res.status(200).json({
            message: 'Deleted',
            result
        });
    }).catch(err=>{
        res.status(500).json(err);
    })
});

module.exports = router;