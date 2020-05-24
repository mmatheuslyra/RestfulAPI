const chai = require('chai') //const {assert} = require('chai');
const  {sayHello} = require('../functions');

chai.should(); // Assertion Style

describe('Testing Funcitons from ./functions', ()=>{
    it('Should say hello to a person from a city', ()=>{
        chai.assert.equal(sayHello('Matheus','Porto Alegre'), 'Hello Matheus from Porto Alegre');
    });
});