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

import {CdkResource, Stack} from "../../core/model";
import {GetAttr} from "../../core/func";

import ScriptRef from "../ref/ScriptRef";

import { ScriptOptions } from "./options/ScriptOptions";

export default class Script extends CdkResource {
    private readonly stack: Stack;
    private readonly namespaceName: string;
    private readonly name: string;
    private readonly script: string;
    private readonly description: string|null = null;

    public constructor(
        stack: Stack,
        namespaceName: string,
        name: string,
        script: string,
        options: ScriptOptions|null = null,
    ) {
        super(
            "Script_Script_" + name
        );

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.script = script;
        this.description = options?.description ?? null;
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
        return "GS2::Script::Script";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.script != null) {
            properties["Script"] = this.script;
        }

        return properties;
    }

    public ref(
    ): ScriptRef {
        return new ScriptRef(
            this.namespaceName,
            this.name!,
        );
    }

    public getAttrScriptId(
    ): GetAttr {
        return new GetAttr(
            this,
            "Item.ScriptId",
            null,
        );
    }
}
