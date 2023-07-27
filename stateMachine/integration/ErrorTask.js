"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const StringType_1 = tslib_1.__importDefault(require("./StringType"));
class ErrorTask {
    constructor(name) {
        this.name = name;
        this.arguments = [new StringType_1.default("reason")];
    }
    getName() {
        return this.name;
    }
    transition(event) {
        return this;
    }
    getEvents() {
        return [];
    }
    gsl() {
        return `ErrorTask ${this.name}(string reason);\n\n`;
    }
    mermaid() {
        return "";
    }
}
exports.default = ErrorTask;
//# sourceMappingURL=ErrorTask.js.map