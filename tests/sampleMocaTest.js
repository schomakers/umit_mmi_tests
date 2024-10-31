const expect = require('chai').expect;

//Sample JUnit test
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

describe('#sum()', function () {

    //  if needed logic before each test run
    beforeEach(function () {

    })

    // test a functionality
    it('should add numbers', function () {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    })

    it('should add negative numbers', function () {
        expect(sum([-1, -2, -3, -4, -5])).to.equal(-15);
    })

    it('should return 0 for empty array', function () {
        expect(sum([])).to.equal(0);
    });
    
    it('should return single element for a one-item array', function () {
        expect(sum([999])).to.equal(999);
    });

    it('should add floating-point numbers', function () {
        expect(sum([1.5, 2.5, 3.5])).to.be.closeTo(7.5, 0.01);
    });

});