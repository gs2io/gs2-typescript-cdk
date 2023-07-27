"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Result_1 = tslib_1.__importDefault(require("./Result"));
const Event_1 = tslib_1.__importDefault(require("./Event"));
class WaitTask {
    constructor(name) {
        this.results = [];
        this.events = [];
        this.name = name;
    }
    getName() {
        return this.name;
    }
    transition(event) {
        event.fromTaskName = this.name;
        this.events.push(event);
        return this;
    }
    getEvents() {
        return this.events;
    }
    result(resultName, emitEventArgumentVariableNames, nextTaskName) {
        this.results.push(new Result_1.default(resultName, resultName, emitEventArgumentVariableNames));
        let eventArguments = Array.from(emitEventArgumentVariableNames.keys());
        this.transition(new Event_1.default(resultName, eventArguments, nextTaskName));
        return this;
    }
    gsl() {
        let output = `WaitTask ${this.name} {\n`;
        for (let event of this.events) {
            let argumentsPart = event.arguments.map(v => v.gsl()).join(", ");
            output += `  Event ${event.name}(${argumentsPart});\n`;
        }
        output += "}\n\n";
        return output;
    }
    mermaid() {
        let output = "";
        for (let event of this.events) {
            if (event.nextTaskName != "Error") {
                output += `{stateMachineName}_${event.fromTaskName}[{${event.fromTaskName}}] -->|${event.name}| {stateMachineName}_${event.nextTaskName}\n`;
            }
        }
        return output;
    }
}
exports.default = WaitTask;
//# sourceMappingURL=WaitTask.js.map