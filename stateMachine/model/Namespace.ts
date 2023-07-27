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
 *
 * deny overwrite
 */

import {CdkResource, Stack} from "../../core/model";
import {GetAttr} from "../../core/func";
import ScriptSetting from "../../core/model/ScriptSetting";
import LogSetting from "../../core/model/LogSetting";
import ScriptNamespace from "../../script/model/Namespace";

import NamespaceRef from "../ref/NamespaceRef";

import { NamespaceOptions } from "./options/NamespaceOptions";
import StateMachineMaster from "./StateMachineMaster";
import StateMachineDefinition from "../integration/StateMachineDefinition";

export default class Namespace extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly description: string|null = null;
    private readonly startScript: ScriptSetting|null = null;
    private readonly passScript: ScriptSetting|null = null;
    private readonly errorScript: ScriptSetting|null = null;
    private readonly lowestStateMachineVersion: number|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "StateMachine_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.description = options?.description ?? null;
        this.startScript = options?.startScript ?? null;
        this.passScript = options?.passScript ?? null;
        this.errorScript = options?.errorScript ?? null;
        this.lowestStateMachineVersion = options?.lowestStateMachineVersion ?? null;
        this.logSetting = options?.logSetting ?? null;
        stack.addResource(
            this,
        );
    }


    public alternateKeys(
    ) {
        return "name";
    }

    public resourceType(
    ): string {
        return "GS2::StateMachine::Namespace";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.startScript != null) {
            properties["StartScript"] = this.startScript?.properties(
            );
        }
        if (this.passScript != null) {
            properties["PassScript"] = this.passScript?.properties(
            );
        }
        if (this.errorScript != null) {
            properties["ErrorScript"] = this.errorScript?.properties(
            );
        }
        if (this.lowestStateMachineVersion != null) {
            properties["LowestStateMachineVersion"] = this.lowestStateMachineVersion;
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = this.logSetting?.properties(
            );
        }

        return properties;
    }

    public ref(
    ): NamespaceRef {
        return new NamespaceRef(
            this.name!,
        );
    }

    public getAttrNamespaceId(
    ): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.NamespaceId",
        );
    }

    public stateMachine(
        scriptNamespace: ScriptNamespace,
        definition: StateMachineDefinition
    ) {
        definition.appendScripts(
            this.stack,
            scriptNamespace
        );
        new StateMachineMaster(
            this.stack,
            this.name,
            definition.stateMachineName,
            definition.gsl().replace("{scriptNamespaceName}", scriptNamespace.getName())
        ).addDependsOn(
            this
        );
    }
}
