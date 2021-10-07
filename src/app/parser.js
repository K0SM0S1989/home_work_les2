"use strict";
exports.__esModule = true;
exports.parser = void 0;
var helpers_1 = require("./helpers");
var mathOperators_1 = require("./mathOperators");
var openBracket = "(";
var closeBracket = ")";
var parser = function (line) {
    var stack = line.split(" ");
    return stack.reduce(function (result, item, key) {
        var prevItem = stack[key - 1];
        var nextItem = stack[key + 1];
        var isValidNumberPush = !(0, helpers_1.isNumber)(prevItem) && (0, helpers_1.isNumber)(item);
        var isValidOpenBrackets = !(0, helpers_1.isNumber)(prevItem) && (0, helpers_1.isNumber)(nextItem) && item === openBracket;
        var isValidCloseBrackets = !(0, helpers_1.isNumber)(nextItem) && item === closeBracket;
        var isValidOperatorPush;
        if (mathOperators_1.mathOperators.hasOwnProperty(item) && mathOperators_1.mathSingleNumberOperators.hasOwnProperty(prevItem)) {
            isValidOperatorPush =
                !(0, helpers_1.isNumber)(item);
        }
        else if ((mathOperators_1.mathSingleNumberOperators.hasOwnProperty(item) && !(0, helpers_1.isNumber)(nextItem)) || mathOperators_1.mathOperators.hasOwnProperty(item)) {
            isValidOperatorPush =
                ((0, helpers_1.isNumber)(prevItem) || prevItem === closeBracket) &&
                    !(0, helpers_1.isNumber)(item);
        }
        if (isValidNumberPush) {
            result.push(Number(item));
        }
        else if (isValidOperatorPush) {
            result.push(item);
        }
        else if (isValidOpenBrackets) {
            result.push(item);
        }
        else if (isValidCloseBrackets) {
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