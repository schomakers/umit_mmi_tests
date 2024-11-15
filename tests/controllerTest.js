// @author: Andre Schomakers

const expect = require('chai').expect;
const { describe } = require('mocha');
const apiTemperature = require('../public/js/auxiliaryAPI')


// ---- 
// fahrenheitToCelsius tested for 3 cases
describe("fahrenheitToCelsius()", function(){

	it("Input (F°) below 32", function() {
	expect(Math.round(apiTemperature.fahrenheitToCelsius(30)*10)/10).to.equal(-1.1)
	});

	it("Input (F°) equals 0", function() {
	expect(Math.round(apiTemperature.fahrenheitToCelsius(0)*10)/10).to.equal(-17.8)
	});

	it("Input (F°) above 32", function() {
	expect(Math.round(apiTemperature.fahrenheitToCelsius(34)*10)/10).to.equal(1.1)
	});
});


// ---- 
// celsiusToFahrenheit
describe("celsiusToFahrenheit()", function() {

	it("Input (°C) below 0", function() {
	expect(Math.round(apiTemperature.celsiusToFahrenheit(-2)*10)/10).to.equal(28.4)
	});

	it("Input (°C) is 0", function() {
	expect(Math.round(apiTemperature.celsiusToFahrenheit(0)*10)/10).to.equal(32)
	});

	it("Input (°C) above 0", function() {
	expect(Math.round(apiTemperature.celsiusToFahrenheit(2)*10)/10).to.equal(35.6)
	});
});


// ---- 
// cutoff times 06:00 and 22:00 for printing "GuMo" bzw. "Guten Abend"
describe("getGreetingsDependendOnTime", function() {

	it("Testing 6:00 == GuMo", function() {
		expect(apiTemperature.getGreetingDependOnTime(new Date('2024-10-31 06:00:00'))).to.equal("Guten Morgen");
	});
	
	it("Testing 22:00 == Guten Abend", function() {
		expect(apiTemperature.getGreetingDependOnTime(new Date('2024-10-31 22:00:00'))).to.equal("Guten Abend");
	});

	// this is one is actually a lil redundant ..
	it("Testing Edge Case 22:01", function() {
		expect(apiTemperature.getGreetingDependOnTime(new Date('2024-10-31 22:01:00'))).to.equal("Guten Abend");
	});

	it("Testing Edge Case 05:59", function() {
		expect(apiTemperature.getGreetingDependOnTime(new Date('2024-10-31 05:59:00'))).to.equal("Guten Abend");
	});

	// testing if an time is inputted as str object
	it("Input is non-date-object", function() {
		expect(() => apiTemperature.getGreetingDependOnTime("06:00")).to.throw(Error, "Invalid input: expected a date object");
	});
	
	
});