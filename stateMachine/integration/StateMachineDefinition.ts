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
import { Stack } from '../../core/model';
import { Script as Gs2Script, Namespace } from '../../script/model';
import StateMachine from "./StateMachine";
import IVariable from "./IVariable";
import Event from "./Event";
import Task from "./Task";
import InParam from "./InParam";
import OutParam from "./OutParam";
import WaitTask from "./WaitTask";
import PassTask from "./PassTask";
import ErrorTask from "./ErrorTask";
import SubStateMachineTask from "./SubStateMachineTask";
import IntType from "./IntType";
import FloatType from "./FloatType";
import BoolType from "./BoolType";
import StringType from "./StringType";
import ArrayType from "./ArrayType";
import MapType from "./MapType";

export default class StateMachineDefinition {
    stateMachineName = "";
    stateMachines: StateMachine[] = [];

    add(stateMachine: StateMachine) {
        this.stateMachines.push(stateMachine);
    }

    entryPointStateMachineName(stateMachineName: string) {
        this.stateMachineName = stateMachineName;
    }

    stateMachine(name: string, variables: IVariable[]) {
        return new StateMachine(this, name, variables);
    }

    scriptTask(name: string, args: IVariable[], script: string) {
        return new Task(name, args, script);
    }

    subStateMachineTask(name: string, subStateMachineName: string, inParams: InParam[], outParams: OutParam[], nextTaskName: string) {
        let task = new SubStateMachineTask(name, subStateMachineName, inParams, outParams);
        task.transition(new Event("Pass", outParams.map(v => v.subStateMachineVariable), nextTaskName));
        return task;
    }

    inParam(currentStateMachineVariable: IVariable, subStateMachineVariable: IVariable) {
        return new InParam(currentStateMachineVariable, subStateMachineVariable);
    }

    outParam(subStateMachineVariable: IVariable, currentStateMachineVariable: IVariable) {
        return new OutParam(subStateMachineVariable, currentStateMachineVariable);
    }

    waitTask(name: string): WaitTask {
        return new WaitTask(name);
    }

    passTask(name: string): PassTask {
        return new PassTask(name);
    }

    errorTask(name: string): ErrorTask {
        return new ErrorTask(name);
    }

    intType(name: string): IntType {
        return new IntType(name);
    }

    floatType(name: string): FloatType {
        return new FloatType(name);
    }

    boolType(name: string): BoolType {
        return new BoolType(name);
    }

    stringType(name: string): StringType {
        return new StringType(name);
    }

    arrayType(name: string): ArrayType {
        return new ArrayType(name);
    }

    mapType(name: string): MapType {
        return new MapType(name);
    }

    appendScripts(stack: Stack, scriptNamespace: Namespace): Gs2Script[] {
        let scripts: Gs2Script[] = [];
        for (let stateMachine of this.stateMachines) {
            for (let script of stateMachine.scripts()) {
                let deployScript = new Gs2Script(
                    stack,
                    scriptNamespace.getName(),
                    script.name,
                    script.payload.trim()
                );
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
