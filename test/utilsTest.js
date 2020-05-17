const {assert} = require('chai');
const {userName, addNumbers} = require('../utils');

describe('Utils Tests', ()=>{
    it('Should return the username',()=>{
        assert.equal(userName(), 'Matheus');
    });

    it('Should return an output of the type String', ()=>{
        const result = userName();
        assert.typeOf(result, 'string');
    });

    it('addNumbers should return a value above 5', ()=>{
        const result = addNumbers(2,3);
        assert.isAbove(result, 5);
    });

    it('addNumbers should return a Number', ()=>{
        const result = addNumbers(2,3);
        assert.typeOf(result, 'Number');
    });

});