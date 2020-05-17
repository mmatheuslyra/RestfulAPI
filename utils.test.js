const {userName} = require('./utils');

test('Should return the User Name',()=>{
    expect(userName()).toBe('Matheus');
});