"use strict";
exports.__esModule = true;
var mathOperators_1 = require("./mathOperators");
describe("mathOperators test cases", function () {
    it("mul 1 * 2 to equal 2", function () {
        expect((0, mathOperators_1.mul)(1, 2)).toBe(2);
    });
    it("mul 2 * 2 to equal 4", function () {
        expect((0, mathOperators_1.mul)(2, 2)).toBe(4);
    });
    it("div 2 / 2 to equal 1", function () {
        expect((0, mathOperators_1.div)(2, 2)).toBe(1);
    });
    it("div 4 / 2 to equal 2", function () {
        expect((0, mathOperators_1.div)(4, 2)).toBe(2);
    });
    it("add 4 + 2 to equal 6", function () {
        expect((0, mathOperators_1.add)(4, 2)).toBe(6);
    });
    it("minus 4 - 2 to equal 2", function () {
        expect((0, mathOperators_1.minus)(4, 2)).toBe(2);
    });
});
//# sourceMappingURL=mathOperators.test.js.map