"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubStateMachineTask {
    constructor(name, subStateMachineName, inParams, outParams) {
        this.events = [];
        this.name = name;
        this.subStateMachineName = subStateMachineName;
        this.inParams = inParams;
        this.outParams = outParams;
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
    gsl() {
        let output = [];
        output.push(`SubStateMachineTask ${this.name} {`);
        output.push(`  using ${this.name};`);
        let inParamPart = this.inParams
            .map(inParam => `${inParam.subStateMachineVariable.getName()} <- ${inParam.currentStateMachineVariable.getName()}`)
            .join(", ");
        output.push(`  in (${inParamPart});`);
        let outParamPart = this.outParams
            .map(outParam => `${outParam.subStateMachineVariable.getName()} -> ${outParam.currentStateMachineVariable.getName()}`)
            .join(", ");
        output.push(`  out (${outParamPart});`);
        output.push("}\n\n");
        return output.join("\n");
    }
    mermaid() {
        return `${this.name}_${this.name}[/${this.name}/]\n`;
    }
}
exports.default = SubStateMachineTask;
//# sourceMappingURL=SubStateMachineTask.js.map