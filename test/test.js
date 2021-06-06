
var test = require('unit.js');
var script = require('../script');


describe('Triangle type test', function(){
    it('Equilateral', function(){
        test.assert.equal(script.GetTypeOfTriangle(5,5,5),"equilateral");
    });
    it('Isosceles', function(){
        test.assert.equal(script.GetTypeOfTriangle(5,3,3),"isosceles");
    });
    it('Scalene', function(){
        test.assert.equal(script.GetTypeOfTriangle(3,4,5),"scalene");
    });
    it('Impossible', function(){
        test.assert.equal(script.GetTypeOfTriangle(15,5,5),"impossible");
    });
});