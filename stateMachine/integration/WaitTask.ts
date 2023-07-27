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
import ITask from "./ITask";
import Result from "./Result";
import Event from "./Event";
import IVariable from "./IVariable";

export default class WaitTask implements ITask {
    name: string;

    private results: Result[] = [];
    private events: Event[] = [];

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    transition(event: Event): this {
        event.fromTaskName = this.name;
        this.events.push(event);
        return this;
    }

    getEvents(): Event[] {
        return this.events;
    }

    result(resultName: string, emitEventArgumentVariableNames: Map<IVariable, string>, nextTaskName: string): this {
        this.results.push(new Result(
            resultName,
            resultName,
            emitEventArgumentVariableNames
        ));
        let eventArguments = Array.from(emitEventArgumentVariableNames.keys());
        this.transition(new Event(resultName, eventArguments, nextTaskName));
        return this;
    }

    gsl(): string {
        let output = `WaitTask ${this.name} {\n`;
        for (let event of this.events) {
            let argumentsPart = event.arguments.map(v => v.gsl()).join(", ");
            output += `  Event ${event.name}(${argumentsPart});\n`;
        }
        output += "}\n\n";
        return output;
    }

    mermaid(): string {
        let output = "";
        for (let event of this.events) {
            if (event.nextTaskName != "Error") {
                output += `{stateMachineName}_${event.fromTaskName}[{${event.fromTaskName}}] -->|${event.name}| {stateMachineName}_${event.nextTaskName}\n`;
            }
        }
        return output;
    }
}
