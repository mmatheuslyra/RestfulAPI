const expres = require("express");
const router = expres.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "GET Request to /products"
    });
});

router.post('/', (req, res, next)=>{
    res.status(201).json({
        message: "POST Request to /products"
    });
});

router.get('/:productID', (req, res, next)=>{
    const id = req.params.productID;
    if (id == 'special'){
        res.status(200).json({
            message: 'GET request for productID',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'You passed and ID'
        });
    }
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