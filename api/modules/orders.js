const mongoose = require('mongoose');

const OrderSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    quantity: Number
});

module.exports = mongoose.model('Oder', OrderSchema);