const chai = require('chai');
const utils = require('../utils');

describe('Util Tests',()=>{
   /* it('Should return the reference title',()=>{
        chai.assert.equal(utils.getData('8710126', 'title'), 'MEC and IoT Based Automatic Agent Reconfiguration in Industry 4.0');
    });*/
    it('Should return the right number of filtered elements',()=>{
        chai.assert.equal(utils.filterItems(13),3);
        chai.assert.equal(utils.filterItems(14),2);
        chai.assert.equal(utils.filterItems(0),6);
    });
    it('Should return the sum of the items over a certain price',()=>{
        chai.assert.equal(utils.sumItems(13), 44.97);
        chai.assert.equal(utils.sumItems(14), 30.98);
        chai.assert.equal(utils.sumItems(0), 78.94);
    });
    it('Should return the price with discount', ()=>{
        chai.assert.equal(utils.productDiscount('arrival',0.2),10.392);
        chai.assert.equal(utils.productDiscount('o hobbit',0.15),11.8915);
    });

    it('Should return the items over price',()=>{
        chai.assert.isArray(utils.returnItemsOverPrice(0));
        chai.assert.equal(utils.returnItemsOverPrice(12.00).length, 4);
        chai.assert.equal(utils.returnItemsOverPrice(14.00).length, 2);
    })

    it('Should return the item price by name', ()=>{
        chai.assert.equal(utils.returnPrice('fundação'), 15.99);
        chai.assert.equal(utils.returnPrice('lord of the rings'), 10.99);
    })

    it('Should return if found a value using binary search', ()=>{
        //chai.assert.equal(utils.binarySearch([22, 34, 51, 81, 12, 13, 20, 7],0,7,51), 'a');
        //chai.assert.equal(utils.binarySearch(array,0,8,12), 1);
        /*chai.assert.equal(utils.binarySearch(array,0,8,81), 1);
        chai.assert.equal(utils.binarySearch(array,0,8,3), 1);
        chai.assert.equal(utils.binarySearch(array,0,8,88), 0);
        chai.assert.equal(utils.binarySearch(array,0,8,42), 0);
        chai.assert.equal(utils.binarySearch(array,0,8,0), 0);*/
    })


    it('Shoud return create a car class',()=>{
        chai.assert.equal(utils.carCall('Matheus', 'Ford'), 'Hello Matheus, you have a Ford');
        chai.assert.equal(utils.carCall('Matheus', 'Porche'), 'Hello Matheus, you have a Porche');
        chai.assert.notEqual(utils.carCall('João', 'Ferrary'), 'Hello Matheus, you have a Porche');
        chai.assert.notEqual(utils.carCall('Ferrary'), '');
        chai.assert.equal(utils.carBrandCall('Ferrary'), 'This is a Ferrary');
        chai.assert.equal(utils.carBrandCall('Fiat'), 'This is a Fiat');
        chai.assert.equal(utils.carModel('José', 'Ford', 'Mustang'), 'Hello José, you have a Ford, it is a Mustang');
    })
});