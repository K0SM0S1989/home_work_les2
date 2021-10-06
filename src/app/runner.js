"use strict";
exports.__esModule = true;
exports.runner = void 0;
var parser_1 = require("./parser");
var engine_1 = require("./engine");
var runner = function (line) {
    var stack = (0, parser_1.parser)(line);
    if (stack === null) {
        throw new TypeError("Unexpected string");
    }
    var firstPrioritiesRes = (0, engine_1.firstPrioritiesCalc)(stack);
    if (firstPrioritiesRes.length === 1) {
        return Number(firstPrioritiesRes[0]);
    }
    return (0, engine_1.secondPrioritiesCalc)(firstPrioritiesRes);
};
exports.runner = runner;
//# sourceMappingURL=runner.js.map