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
import IVariable from "./IVariable";
import Event from "./Event";
import Result from "./Result";
import Script from "./Script";

export default class Task implements ITask {
    private name: string;
    private arguments: IVariable[];
    private script: string;

    private events: Event[] = [];
    private results: Result[] = [];

    constructor(name: string, args: IVariable[], script: string) {
        this.name = name;
        this.arguments = args;
        this.script = script;
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

    result(name: string, emitEventArgumentVariableNames: Map<IVariable, string>, nextTaskName: string): this {
        this.results.push(new Result(
            name,
            name,
            emitEventArgumentVariableNames
        ));
        this.transition(new Event(
            name,
            Array.from(emitEventArgumentVariableNames.keys()),
            nextTaskName
        ));
        return this;
    }

    scriptPayload(): Script {
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
        return new Script(
            this.name,
            output
        );
    }

    gsl(): string {
        let output = `Task ${this.name}(${this.arguments.map(v => v.gsl()).join(", ")}) {\n`;
        for (let event of this.events) {
            output += `  Event ${event.name}(${event.arguments.map(v => v.gsl()).join(", ")});\n`;
        }
        output += `  Script grn:gs2:{region}:{ownerId}:script:{scriptNamespaceName}:script:{stateMachineName}_${this.name}\n}\n\n`;
        return output;
    }

    mermaid(): string {
        let output = "";
        for(let event of this.events) {
            if (event.nextTaskName == "Error") continue;
            output += `{stateMachineName}_${event.fromTaskName}[[${event.fromTaskName}]] -->|${event.name}| {stateMachineName}_${event.nextTaskName}\n`;
        }
        return output;
    }
}
