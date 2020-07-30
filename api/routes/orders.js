const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();

const Order = require('../modules/orders');
const { response } = require('express');

route.get('/',(req, res, next)=>{
    Order.find().then(result=>{
        res.status(200).json({
            Message:'Orders in the Database',
            result
        });
    }).catch(err=>{
        res.status(500).json(err);
    });
});

route.post('/',(req, res, next)=>{
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity
    });

    order.save().then(result=>{
          res.status(200).json({
            message: 'Order was created',
            result
          });
    }).catch(err=>{
        res.status(404).json(err);
    });
});

route.get('/:orderID',(req, res, next)=>{
    Order.findById(req.params.orderID).then(result=>{
        res.status(200).json({
            message: 'Order founded',
            result
        });
    }).catch(err=>{
        res.status(500).json(err);
    })
});

route.patch('/:orderID', (req,res,next)=>{
    Order.update({_id: req.params.orderID},{$set:{quantity: req.body.quantity}}).then(result=>{
        res.status(200).json(result).catch(err=>{
            res.status(500).json(err);
        })
    })
});

route.delete('/:orderID',(req, res, next)=>{
    Order.remove({_id:req.params.orderID}).then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(500).json(err);
    })
});

module.exports = route;