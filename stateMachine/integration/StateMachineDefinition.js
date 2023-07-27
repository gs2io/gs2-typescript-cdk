"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const model_1 = require("../../script/model");
const StateMachine_1 = tslib_1.__importDefault(require("./StateMachine"));
const Event_1 = tslib_1.__importDefault(require("./Event"));
const Task_1 = tslib_1.__importDefault(require("./Task"));
const InParam_1 = tslib_1.__importDefault(require("./InParam"));
const OutParam_1 = tslib_1.__importDefault(require("./OutParam"));
const WaitTask_1 = tslib_1.__importDefault(require("./WaitTask"));
const PassTask_1 = tslib_1.__importDefault(require("./PassTask"));
const ErrorTask_1 = tslib_1.__importDefault(require("./ErrorTask"));
const SubStateMachineTask_1 = tslib_1.__importDefault(require("./SubStateMachineTask"));
const IntType_1 = tslib_1.__importDefault(require("./IntType"));
const FloatType_1 = tslib_1.__importDefault(require("./FloatType"));
const BoolType_1 = tslib_1.__importDefault(require("./BoolType"));
const StringType_1 = tslib_1.__importDefault(require("./StringType"));
const ArrayType_1 = tslib_1.__importDefault(require("./ArrayType"));
const MapType_1 = tslib_1.__importDefault(require("./MapType"));
class StateMachineDefinition {
    constructor() {
        this.stateMachineName = "";
        this.stateMachines = [];
    }
    add(stateMachine) {
        this.stateMachines.push(stateMachine);
    }
    entryPointStateMachineName(stateMachineName) {
        this.stateMachineName = stateMachineName;
    }
    stateMachine(name, variables) {
        return new StateMachine_1.default(this, name, variables);
    }
    scriptTask(name, args, script) {
        return new Task_1.default(name, args, script);
    }
    subStateMachineTask(name, subStateMachineName, inParams, outParams, nextTaskName) {
        let task = new SubStateMachineTask_1.default(name, subStateMachineName, inParams, outParams);
        task.transition(new Event_1.default("Pass", outParams.map(v => v.subStateMachineVariable), nextTaskName));
        return task;
    }
    inParam(currentStateMachineVariable, subStateMachineVariable) {
        return new InParam_1.default(currentStateMachineVariable, subStateMachineVariable);
    }
    outParam(subStateMachineVariable, currentStateMachineVariable) {
        return new OutParam_1.default(subStateMachineVariable, currentStateMachineVariable);
    }
    waitTask(name) {
        return new WaitTask_1.default(name);
    }
    passTask(name) {
        return new PassTask_1.default(name);
    }
    errorTask(name) {
        return new ErrorTask_1.default(name);
    }
    intType(name) {
        return new IntType_1.default(name);
    }
    floatType(name) {
        return new FloatType_1.default(name);
    }
    boolType(name) {
        return new BoolType_1.default(name);
    }
    stringType(name) {
        return new StringType_1.default(name);
    }
    arrayType(name) {
        return new ArrayType_1.default(name);
    }
    mapType(name) {
        return new MapType_1.default(name);
    }
    appendScripts(stack, scriptNamespace) {
        let scripts = [];
        for (let stateMachine of this.stateMachines) {
            for (let script of stateMachine.scripts()) {
                let deployScript = new model_1.Script(stack, scriptNamespace.getName(), script.name, script.payload.trim());
                deployScript.addDependsOn(scriptNamespace);
                scripts.push(deployScript);
            }
        }
        return scripts;
    }
    gsl() {
        let output = "";
        for (let stateMachine of this.stateMachines) {
            output += `${stateMachine.gsl()}\n`;
        }
        return output;
    }
    mermaid() {
        let output = "flowchart TD\n";
        output += `Start ----> ${this.stateMachines[0].name}_{${this.stateMachines[0].entryPointValue}\n`.padStart(2);
        output += `${this.stateMachines[0].name}_Pass ----> Exit\n`.padStart(2);
        for (let stateMachine of this.stateMachines) {
            output += `${stateMachine.mermaid()}\n`.padStart(2);
        }
        for (let stateMachine of this.stateMachines) {
            output = output.replace(`{${stateMachine.name}_entryPoint}`, stateMachine.entryPointValue);
        }
        return output;
    }
}
exports.default = StateMachineDefinition;
//# sourceMappingURL=StateMachineDefinition.js.map