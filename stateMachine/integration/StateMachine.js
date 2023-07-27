"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Task_1 = tslib_1.__importDefault(require("./Task"));
const SubStateMachineTask_1 = tslib_1.__importDefault(require("./SubStateMachineTask"));
const WaitTask_1 = tslib_1.__importDefault(require("./WaitTask"));
const indent_1 = tslib_1.__importDefault(require("./indent"));
class StateMachine {
    constructor(stateMachineDefinition, name, variables) {
        this.tasks = [];
        this.stateMachineDefinition = stateMachineDefinition;
        this.name = name;
        this.variables = variables;
        this.entryPointValue = "";
        stateMachineDefinition.add(this);
    }
    task(...args) {
        this.tasks.push(...args);
        return this;
    }
    entryPoint(taskName) {
        this.entryPointValue = taskName;
        return this;
    }
    scripts() {
        let scripts = [];
        for (let task of this.tasks) {
            if (task instanceof Task_1.default) {
                let script = task.scriptPayload();
                script.name = this.name + "_" + script.name;
                scripts.push(script);
            }
        }
        return scripts;
    }
    gsl() {
        let output = `StateMachine ${this.name} {\n`;
        if (this.variables && this.variables.length > 0) {
            let variablesPart = "Variables {\n";
            for (let variable of this.variables) {
                variablesPart += (0, indent_1.default)(`${variable.gsl()};\n`, 2);
            }
            variablesPart += "}\n\n";
            output += (0, indent_1.default)(variablesPart, 2);
        }
        if (this.entryPointValue) {
            output += (0, indent_1.default)(`EntryPoint ${this.entryPointValue};\n\n`, 2);
        }
        for (let task of this.tasks) {
            output += (0, indent_1.default)(task.gsl(), 2);
        }
        for (let task of this.tasks) {
            for (let event of task.getEvents()) {
                output += (0, indent_1.default)(event.gsl(), 2);
            }
        }
        output += "}\n";
        let result = output.replace("{stateMachineName}", this.name);
        return result;
    }
    mermaid() {
        let output = `subgraph ${this.name}\n`;
        for (let task of this.tasks) {
            output += `${task.mermaid()}\n`;
            output += "\n";
        }
        output += "end\n";
        for (let task of this.tasks) {
            if (task instanceof SubStateMachineTask_1.default) {
                output += "\n";
                output += `${this.name}_${task.name} --> ${task.subStateMachineName}_{${task.subStateMachineName}_entryPoint}\n`;
                output += `${task.subStateMachineName}_Pass -->|Pass| ${this.name}_${task.events[0].nextTaskName}\n`;
            }
            if (task instanceof WaitTask_1.default) {
                output += "\n";
                output += `Player ----->|Interaction| ${this.name}_${task.name}\n`;
            }
        }
        return output.replace("{stateMachineName}", this.name);
    }
}
exports.default = StateMachine;
//# sourceMappingURL=StateMachine.js.map