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
import InParam from "./InParam";
import OutParam from "./OutParam";
import Event from "./Event";

export default class SubStateMachineTask implements ITask {
    name: string;
    subStateMachineName: string;
    private inParams: InParam[];
    private outParams: OutParam[];
    events: Event[] = [];

    constructor(name: string, subStateMachineName: string, inParams: InParam[], outParams: OutParam[]) {
        this.name = name;
        this.subStateMachineName = subStateMachineName;
        this.inParams = inParams;
        this.outParams = outParams;
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

    gsl(): string {
        let output: string[] = [];
        output.push(`SubStateMachineTask ${this.name} {`);
        output.push(`  using ${this.name};`);

        let inParamPart: string = this.inParams
            .map(inParam => `${inParam.subStateMachineVariable.getName()} <- ${inParam.currentStateMachineVariable.getName()}`)
            .join(", ");
        output.push(`  in (${inParamPart});`);

        let outParamPart: string = this.outParams
            .map(outParam => `${outParam.subStateMachineVariable.getName()} -> ${outParam.currentStateMachineVariable.getName()}`)
            .join(", ");
        output.push(`  out (${outParamPart});`);

        output.push("}\n\n");
        return output.join("\n");
    }

    mermaid(): string {
        return `${this.name}_${this.name}[/${this.name}/]\n`;
    }
}
