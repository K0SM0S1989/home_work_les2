"use strict";
exports.__esModule = true;
var runner_1 = require("./runner");
describe("Runner simple cases", function () {
    it("1 * 32", function () {
        expect((0, runner_1.runner)("1 * 32")).toEqual(32);
    });
    it("2 * 32", function () {
        expect((0, runner_1.runner)("2 * 32")).toEqual(64);
    });
    it("2 + 32", function () {
        expect((0, runner_1.runner)("2 + 32")).toEqual(34);
    });
    it("3 **", function () {
        expect((0, runner_1.runner)("3 **")).toEqual(9);
    });
    it("3 ^ 2", function () {
        expect((0, runner_1.runner)("3 ^ 2")).toEqual(9);
    });
});
describe("Runner tripled/mixed cases", function () {
    it("2 * 2 * 3", function () {
        expect((0, runner_1.runner)("2 * 2 * 3")).toEqual(12);
    });
    it("2 * 2 + 3", function () {
        expect((0, runner_1.runner)("2 * 2 + 3")).toEqual(7);
    });
    it("2 + 2 * 3", function () {
        expect((0, runner_1.runner)("2 + 2 * 3")).toEqual(8);
    });
});
describe("Runner long cases", function () {
    it("20 + 1 * 10 - 5 * 3", function () {
        expect((0, runner_1.runner)("20 + 1 * 10 - 5 * 3")).toEqual(15);
    });
    it("20 - 10 * 10 / 5 - 3", function () {
        expect((0, runner_1.runner)("20 - 10 * 10 / 5 - 3")).toEqual(-3);
    });
    it("( 3 + 6 ) + 2 * 3", function () {
        expect((0, runner_1.runner)("( 3 + 6 ) + 2 * 3")).toEqual(15);
    });
});
//# sourceMappingURL=runner.test.js.map