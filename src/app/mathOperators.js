"use strict";
exports.__esModule = true;
exports.mathOperatorsPriorities = exports.mathPriorities = exports.mathOperators = exports.minus = exports.add = exports.div = exports.mul = void 0;
var mul = function (first, second) { return first * second; };
exports.mul = mul;
var div = function (first, second) { return first / second; };
exports.div = div;
var add = function (first, second) { return first + second; };
exports.add = add;
var minus = function (first, second) { return first - second; };
exports.minus = minus;
exports.mathOperators = {
    "*": exports.mul,
    "/": exports.div,
    "+": exports.add,
    "-": exports.minus
};
exports.mathPriorities = [1, 2];
var FIRST = exports.mathPriorities[0], SECOND = exports.mathPriorities[1];
exports.mathOperatorsPriorities = {
    "*": FIRST,
    "/": FIRST,
    "+": SECOND,
    "-": SECOND,
};
//# sourceMappingURL=mathOperators.js.map