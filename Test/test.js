const assert = require("chai").assert;

const app = require("../multiply");

// Test First TDD Cycle 1
// assertEqual(multiply(1, 1), 1);
describe("multiply", function () {
	it("multiply should return 1", function () {
		let result = app.multiply(1, 1);
		assert.equal(result, 1);
	});

	it("multiply should return 4", function () {
		let result = app.multiply(2, 2);
		assert.equal(result, 4);
	});

    it("multiply should return 9", function () {
		let result = app.multiply(3, 3);
		assert.equal(result, 9);
	});

    it("multiply should return 16", function () {
		let result = app.multiply(4, 4);
		assert.equal(result, 16);
	});

    it("multiply should return 1035", function () {
		let result = app.multiply(23, 45);
		assert.equal(result, 23 * 45);
	});
});

