"use strict";
exports.__esModule = true;
exports.mathOperatorsPriorities = exports.mathPriorities = exports.mathSingleNumberOperators = exports.mathOperators = exports.factorial = exports.exp = exports.square = exports.minus = exports.add = exports.div = exports.mul = void 0;
var mul = function (first, second) { return first * second; };
exports.mul = mul;
var div = function (first, second) { return first / second; };
exports.div = div;
var add = function (first, second) { return first + second; };
exports.add = add;
var minus = function (first, second) { return first - second; };
exports.minus = minus;
var square = function (first) { return Math.pow(first, 2); };
exports.square = square;
var exp = function (first, second) { return Math.pow(first, second); };
exports.exp = exp;
var factorial = function (first) { return (first != 0) ? first * (0, exports.factorial)(first - 1) : 1; };
exports.factorial = factorial;
exports.mathOperators = {
    "*": exports.mul,
    "/": exports.div,
    "+": exports.add,
    "-": exports.minus,
    "^": exports.exp
};
exports.mathSingleNumberOperators = {
    "**": exports.square,
    "!": exports.factorial
};
exports.mathPriorities = [1, 2];
var FIRST = exports.mathPriorities[0], SECOND = exports.mathPriorities[1];
exports.mathOperatorsPriorities = {
    "!": FIRST,
    "**": FIRST,
    "^": FIRST,
    "*": FIRST,
    "/": FIRST,
    "+": SECOND,
    "-": SECOND,
};
//# sourceMappingURL=mathOperators.js.map