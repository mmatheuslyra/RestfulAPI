const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const { response } = require('express');
const { request } = require('chai');


chai.should() // Assertion Style
chai.use(chaiHttp); // Api requests

describe('Testing API requests', ()=>{
    // Test the GET route
    describe('GET /products/',()=>{
        it('It should get all the products', (done)=>{
            chai.request('http://localhost:3000') //chai.request(server)
                .get('/products')
                .end((err,response)=>{
                    response.should.have.status(200);
                done();
                })

        });
    })


    // Test the POST
    describe('POST /orders/',()=>{
        it('It should create a new order', (done)=>{
            const newOrder = {
                "quantity":"1000"
            }
            chai.request('http://localhost:3000') //chai.request(server)
                .post('/orders')
                .send(newOrder)
                .end((err,response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('message');
                    response.body.should.have.property('message').eq('Order was created');
                    response.body.should.have.property('result');
                done();
                })

        });
    })

    describe('GET /products/:productID',()=>{
        it('Should return a single product',()=>{
            chai.request('http://localhost:3000')
                .get('/products/5eb89ba62dce6b024254d507')
                .end((err,response)=>{
                    response.body.should.have.property('name');
                    response.body.should.have.property('name').eq('Watchment');
                    response.body.should.have.property('price')
                    response.body.should.have.property('price').eq(17);
                })
        });
    });
});