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
import ScriptSetting from "../../core/model/ScriptSetting";
import LogSetting from "../../core/model/LogSetting";

import NamespaceRef from "../ref/NamespaceRef";
import CurrentMasterData from "./CurrentMasterData";
import VersionModel from "./VersionModel";

import { NamespaceOptions } from "./options/NamespaceOptions";

export default class Namespace extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly assumeUserId: string;
    private readonly description: string|null = null;
    private readonly acceptVersionScript: ScriptSetting|null = null;
    private readonly checkVersionTriggerScriptId: string|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        assumeUserId: string,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "Version_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.assumeUserId = assumeUserId;
        this.description = options?.description ?? null;
        this.acceptVersionScript = options?.acceptVersionScript ?? null;
        this.checkVersionTriggerScriptId = options?.checkVersionTriggerScriptId ?? null;
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
        return "GS2::Version::Namespace";
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
        if (this.assumeUserId != null) {
            properties["AssumeUserId"] = this.assumeUserId;
        }
        if (this.acceptVersionScript != null) {
            properties["AcceptVersionScript"] = this.acceptVersionScript?.properties(
            );
        }
        if (this.checkVersionTriggerScriptId != null) {
            properties["CheckVersionTriggerScriptId"] = this.checkVersionTriggerScriptId;
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
            this,
            "Item.NamespaceId",
            null,
        );
    }

    public masterData(
        versionModels: VersionModel[],
    ): Namespace {
        new CurrentMasterData(
            this.stack,
            this.name,
            versionModels,
        ).addDependsOn(
            this,
        );
        return this;
    }
}
