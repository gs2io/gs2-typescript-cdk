/*
 * Copyright 2016- Game Server Services, Inc. or its affiliates. All Rights
 * Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import IVariable from "./IVariable";
import ITask from "./ITask";
import Script from "./Script";
import Task from "./Task";
import SubStateMachineTask from "./SubStateMachineTask";
import WaitTask from "./WaitTask";
import StateMachineDefinition from "./StateMachineDefinition";
import indent from "./indent";

export default class StateMachine {
    name: string;
    variables: IVariable[];
    tasks: ITask[] = [];
    entryPointValue: string;
    stateMachineDefinition: StateMachineDefinition;

    constructor(stateMachineDefinition: StateMachineDefinition, name: string, variables: IVariable[]) {
        this.stateMachineDefinition = stateMachineDefinition;
        this.name = name;
        this.variables = variables;
        this.entryPointValue = "";
        stateMachineDefinition.add(this);
    }

    task(...args: ITask[]) {
        this.tasks.push(...args);
        return this;
    }

    entryPoint(taskName: string) {
        this.entryPointValue = taskName;
        return this;
    }

    scripts() {
        let scripts: Script[] = [];
        for (let task of this.tasks) {
            if (task instanceof Task) {
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
                variablesPart += indent(`${variable.gsl()};\n`, 2);
            }
            variablesPart += "}\n\n";
            output += indent(variablesPart, 2);
        }

        if (this.entryPointValue) {
            output += indent(`EntryPoint ${this.entryPointValue};\n\n`, 2);
        }

        for (let task of this.tasks) {
            output += indent(task.gsl(), 2);
        }

        for (let task of this.tasks) {
            for (let event of task.getEvents()) {
                output += indent(event.gsl(), 2);
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
            if (task instanceof SubStateMachineTask) {
                output += "\n";
                output += `${this.name}_${(task as SubStateMachineTask).name} --> ${(task as SubStateMachineTask).subStateMachineName}_{${(task as SubStateMachineTask).subStateMachineName}_entryPoint}\n`;
                output += `${(task as SubStateMachineTask).subStateMachineName}_Pass -->|Pass| ${this.name}_${(task as SubStateMachineTask).events[0].nextTaskName}\n`;
            }
            if (task instanceof WaitTask) {
                output += "\n";
                output += `Player ----->|Interaction| ${this.name}_${(task as WaitTask).name}\n`;
            }
        }

        return output.replace("{stateMachineName}", this.name);
    }
}
