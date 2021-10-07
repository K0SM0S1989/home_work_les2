"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.actionInBrackets = exports.secondPrioritiesCalc = exports.firstPrioritiesCalc = void 0;
var helpers_1 = require("./helpers");
var mathOperators_1 = require("./mathOperators");
var FIRST = mathOperators_1.mathPriorities[0], SECOND = mathOperators_1.mathPriorities[1];
var openBracket = "(";
var closeBracket = ")";
var firstPrioritiesCalc = function (stack) {
    return stack.reduce(function (result, nextItem, key) {
        if (nextItem === openBracket) {
            var bracketsArray = stack.splice(stack.indexOf(openBracket), stack.indexOf(closeBracket) - stack.indexOf(openBracket) + 1);
            nextItem = (0, exports.actionInBrackets)(bracketsArray.slice(1, -1));
            stack.unshift(nextItem);
        }
        var prevItem = result[result.length - 2];
        var item = result[result.length - 1];
        if (mathOperators_1.mathSingleNumberOperators.hasOwnProperty(nextItem)) {
            item = nextItem;
            prevItem = result[result.length - 1];
        }
        if (!(0, helpers_1.isNumber)(String(item)) && mathOperators_1.mathOperatorsPriorities[item] === FIRST) {
            if (!mathOperators_1.mathOperators[item] && !mathOperators_1.mathSingleNumberOperators[item]) {
                throw new TypeError("Unexpected stack!");
            }
            result = __spreadArray(__spreadArray([], result.slice(0, -2), true), [
                mathOperators_1.mathSingleNumberOperators.hasOwnProperty(item) ? mathOperators_1.mathSingleNumberOperators[item](Number(prevItem)) :
                    mathOperators_1.mathOperators[item](Number(prevItem), Number(nextItem)),
            ], false);
        }
        else {
            if (nextItem !== null && nextItem !== undefined
                && nextItem !== openBracket && nextItem !== closeBracket) {
                result.push(nextItem);
            }
        }
        return result;
    }, []);
};
exports.firstPrioritiesCalc = firstPrioritiesCalc;
var secondPrioritiesCalc = function (stack) {
    return stack.reduce(function (result, nextItem, key) {
        var item = stack[key - 1];
        if (mathOperators_1.mathOperatorsPriorities[item] === FIRST) {
            throw new TypeError("Unexpected stack!");
        }
        if (!(0, helpers_1.isNumber)(String(item)) && mathOperators_1.mathOperatorsPriorities[item] === SECOND) {
            result = mathOperators_1.mathOperators[item](Number(result), Number(nextItem));
        }
        return result;
    }, Number(stack[0]));
};
exports.secondPrioritiesCalc = secondPrioritiesCalc;
var actionInBrackets = function (stack) {
    return stack.reduce(function (result, nextItem, key) {
        var item = stack[key - 1];
        if (!(0, helpers_1.isNumber)(String(item)) && (mathOperators_1.mathOperatorsPriorities[item] === SECOND
            || mathOperators_1.mathOperatorsPriorities[item] === FIRST)) {
            result = mathOperators_1.mathOperators[item](Number(result), Number(nextItem));
        }
        return result;
    }, Number(stack[0]));
};
exports.actionInBrackets = actionInBrackets;
//# sourceMappingURL=engine.js.map