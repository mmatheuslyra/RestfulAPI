const {assert} = require('chai');
const  {sayHello} = require('../functions');

describe('Testing Funcitons from ./functions', ()=>{
    it('Should say hello to a person from a city', ()=>{
        assert.equal(sayHello('Matheus','Porto Alegre'), 'Hello Matheus from Porto Alegre');
    });
});