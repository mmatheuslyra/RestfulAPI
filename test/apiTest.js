const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');


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
                    //response.should.be.a('array');
                    //response.should.be.eq(3);
                done();
                })

        });
    })
    // Test the GET (by id) route
});