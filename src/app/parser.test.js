"use strict";
exports.__esModule = true;
var parser_1 = require("./parser");
describe("Parser correct cases", function () {
    it("1 + 32", function () {
        expect((0, parser_1.parser)("1 + 32")).toEqual([1, "+", 32]);
    });
    it("11 + 3 * 22", function () {
        expect((0, parser_1.parser)("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
    });
    it("1 + 32 - 2 + 2", function () {
        expect((0, parser_1.parser)("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
    });
    it("3 **", function () {
        expect((0, parser_1.parser)("3 **")).toEqual([3, "**"]);
    });
    it("3 ** + 2", function () {
        expect((0, parser_1.parser)("3 ** + 2")).toEqual([3, "**", "+", 2]);
    });
    it("3 ** * ( 2 + 2 )", function () {
        expect((0, parser_1.parser)("3 ** * ( 2 + 2 )")).toEqual([3, "**", "*", "(", 2, "+", 2, ")"]);
    });
    it("( 3 + 6 ) + 2 * 3", function () {
        expect((0, parser_1.parser)("( 3 + 6 ) + 2 * 3")).toEqual(["(", 3, "+", 6, ")", "+", 2, "*", 3]);
    });
});
describe("Parser invalid cases", function () {
    it("1 + + 33 - 2", function () {
        expect(function () { return (0, parser_1.parser)("1 + + 33 - 2"); }).toThrow(TypeError("Unexpected string"));
    });
    it("1 ! 33 - 2", function () {
        expect(function () { return (0, parser_1.parser)("1 ! 33 - 2"); }).toThrow(TypeError("Unexpected string"));
    });
    it("3 ** * 3 ( 2 + 2 )", function () {
        expect(function () { return (0, parser_1.parser)("3 ** * 3 ( 2 + 2 )"); }).toThrow(TypeError("Unexpected string"));
    });
    it("3 ** * 3 ( 2 + ) 2", function () {
        expect(function () { return (0, parser_1.parser)("3 ** * 3 ( 2 + ) 2"); }).toThrow(TypeError("Unexpected string"));
    });
});
//# sourceMappingURL=parser.test.js.map