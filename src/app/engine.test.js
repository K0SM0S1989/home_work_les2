"use strict";
exports.__esModule = true;
var engine_1 = require("./engine");
describe("firstPrioritiesCalc simple cases", function () {
    it("[1, * 32]", function () {
        expect((0, engine_1.firstPrioritiesCalc)([1, "*", 32])).toEqual([32]);
    });
    it("[32, /, 32]", function () {
        expect((0, engine_1.firstPrioritiesCalc)([32, "/", 32])).toEqual([1]);
    });
    it("[32, + 32]", function () {
        expect((0, engine_1.firstPrioritiesCalc)([32, "+", 32])).toEqual([32, "+", 32]);
    });
});
describe("firstPrioritiesCalc with single Math action", function () {
    it("[3 **]", function () {
        expect((0, engine_1.firstPrioritiesCalc)([3, "**"])).toEqual([9]);
    });
});
describe("priorities in brackets", function () {
    it("( 3 + 2 )", function () {
        expect((0, engine_1.firstPrioritiesCalc)(["(", 3, "+", 2, ")"])).toEqual([5]);
    });
    it("( 3 + 6 ) + 2 * 3", function () {
        expect((0, engine_1.firstPrioritiesCalc)(["(", 3, "+", 6, ")", "+", 2, "*", 3])).toEqual([9, "+", 6]);
    });
    it("( 3 + 6 ) / ( 2 * 3 )", function () {
        expect((0, engine_1.firstPrioritiesCalc)(["(", 3, "+", 6, ")", "/", "(", 1, "*", 3, ")"])).toEqual([3]);
    });
});
describe("firstPrioritiesCalc mixed with second priorities cases", function () {
    it("[32, /, 32, +, 10, *, 10]", function () {
        expect((0, engine_1.firstPrioritiesCalc)([32, "/", 32, "+", 10, "*", 10])).toEqual([
            1,
            "+",
            100,
        ]);
    });
});
describe("secondPrioritiesCalc invalid cases", function () {
    it("[32, / 32]", function () {
        expect(function () { return (0, engine_1.secondPrioritiesCalc)([32, "/", 32]); }).toThrow(TypeError("Unexpected stack!"));
    });
});
describe("secondPrioritiesCalc simple cases", function () {
    it("[32, + 32]", function () {
        expect((0, engine_1.secondPrioritiesCalc)([32, "+", 32])).toEqual(64);
    });
    it("[32, - 32]", function () {
        expect((0, engine_1.secondPrioritiesCalc)([32, "-", 32])).toEqual(0);
    });
    it("[32, - 32, +, 10]", function () {
        expect((0, engine_1.secondPrioritiesCalc)([32, "-", 32, "+", 10])).toEqual(10);
    });
});
//# sourceMappingURL=engine.test.js.map