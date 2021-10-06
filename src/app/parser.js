"use strict";
exports.__esModule = true;
exports.parser = void 0;
var helpers_1 = require("./helpers");
var mathOperators_1 = require("./mathOperators");
var parser = function (line) {
    var stack = line.split(" ");
    return stack.reduce(function (result, item, key) {
        var prevItem = stack[key - 1];
        var isValidNumberPush = !(0, helpers_1.isNumber)(prevItem) && (0, helpers_1.isNumber)(item);
        var isValidOperatorPush = (0, helpers_1.isNumber)(prevItem) &&
            !(0, helpers_1.isNumber)(item) &&
            mathOperators_1.mathOperators.hasOwnProperty(item);
        if (isValidNumberPush) {
            result.push(Number(item));
        }
        else if (isValidOperatorPush) {
            result.push(item);
        }
        else {
            throw new TypeError("Unexpected string");
        }
        return result;
    }, []);
};
exports.parser = parser;
//# sourceMappingURL=parser.js.map