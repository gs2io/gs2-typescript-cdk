"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Event_1 = tslib_1.__importDefault(require("./Event"));
const Result_1 = tslib_1.__importDefault(require("./Result"));
const Script_1 = tslib_1.__importDefault(require("./Script"));
class Task {
    constructor(name, args, script) {
        this.events = [];
        this.results = [];
        this.name = name;
        this.arguments = args;
        this.script = script;
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
    result(name, emitEventArgumentVariableNames, nextTaskName) {
        this.results.push(new Result_1.default(name, name, emitEventArgumentVariableNames));
        this.transition(new Event_1.default(name, Array.from(emitEventArgumentVariableNames.keys()), nextTaskName));
        return this;
    }
    scriptPayload() {
        let output = this.script + "\n\n";
        for (let result of this.results) {
            output += `if result == '${result.name}' then
    result = {
        event='${result.emitEventName}',
        params={${Array.from(result.emitEventArgumentVariableNames.entries()).map(v => `${v[0].getName()}=${v[1]}`).join(", ")}},
        updatedVariables=args.variables
    }
end\n`;
        }
        return new Script_1.default(this.name, output);
    }
    gsl() {
        let output = `Task ${this.name}(${this.arguments.map(v => v.gsl()).join(", ")}) {\n`;
        for (let event of this.events) {
            output += `  Event ${event.name}(${event.arguments.map(v => v.gsl()).join(", ")});\n`;
        }
        output += `  Script grn:gs2:{region}:{ownerId}:script:{scriptNamespaceName}:script:{stateMachineName}_${this.name}\n}\n\n`;
        return output;
    }
    mermaid() {
        let output = "";
        for (let event of this.events) {
            if (event.nextTaskName == "Error")
                continue;
            output += `{stateMachineName}_${event.fromTaskName}[[${event.fromTaskName}]] -->|${event.name}| {stateMachineName}_${event.nextTaskName}\n`;
        }
        return output;
    }
}
exports.default = Task;
//# sourceMappingURL=Task.js.map