const express = require("express");
const route = express.Router();

route.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

route.post('/',(req, res, next)=>{
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };

    res.status(201).json({
        message: 'Orders was created',
        order: order
    });
});

route.get('/:orderID',(req, res, next)=>{
    res.status(200).json({
        message: 'Orders were fetched',
        id: req.params.orderID 
    });
});

route.delete('/:orderID',(req, res, next)=>{
    res.status(200).json({
        message: 'Order deleted',
        id: req.params.orderID 
    });
});

module.exports = route;