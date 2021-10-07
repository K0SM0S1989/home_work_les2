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
    it("exp 3 ^ 4 to equal 81", function () {
        expect((0, mathOperators_1.exp)(3, 4)).toBe(81);
    });
    it("exp 3 ^ 1 to equal 3", function () {
        expect((0, mathOperators_1.exp)(3, 1)).toBe(3);
    });
    it("exp 3 ^ 0 to equal 1", function () {
        expect((0, mathOperators_1.exp)(3, 0)).toBe(1);
    });
    it("square 3** to equal 9", function () {
        expect((0, mathOperators_1.square)(3)).toBe(9);
    });
    it("square 0** to equal 0", function () {
        expect((0, mathOperators_1.square)(0)).toBe(0);
    });
    it("square -3** to equal 9", function () {
        expect((0, mathOperators_1.square)(-3)).toBe(9);
    });
    it('factorial 5 to equal 120', function () {
        expect((0, mathOperators_1.factorial)(5)).toBe(120);
    });
    it('factorial 0 to equal 1', function () {
        expect((0, mathOperators_1.factorial)(0)).toBe(1);
    });
    it('factorial 1 to equal 1', function () {
        expect((0, mathOperators_1.factorial)(1)).toBe(1);
    });
});
//# sourceMappingURL=mathOperators.test.js.map