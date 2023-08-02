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
import TransactionSetting from "../../core/model/TransactionSetting";
import ScriptSetting from "../../core/model/ScriptSetting";
import LogSetting from "../../core/model/LogSetting";

import NamespaceRef from "../ref/NamespaceRef";
import CurrentMasterData from "./CurrentMasterData";
import ExperienceModel from "./ExperienceModel";

import { NamespaceOptions } from "./options/NamespaceOptions";

export default class Namespace extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly description: string|null = null;
    private readonly transactionSetting: TransactionSetting|null = null;
    private readonly experienceCapScriptId: string|null = null;
    private readonly changeExperienceScript: ScriptSetting|null = null;
    private readonly changeRankScript: ScriptSetting|null = null;
    private readonly changeRankCapScript: ScriptSetting|null = null;
    private readonly overflowExperienceScript: ScriptSetting|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "Experience_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.description = options?.description ?? null;
        this.transactionSetting = options?.transactionSetting ?? null;
        this.experienceCapScriptId = options?.experienceCapScriptId ?? null;
        this.changeExperienceScript = options?.changeExperienceScript ?? null;
        this.changeRankScript = options?.changeRankScript ?? null;
        this.changeRankCapScript = options?.changeRankCapScript ?? null;
        this.overflowExperienceScript = options?.overflowExperienceScript ?? null;
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
        return "GS2::Experience::Namespace";
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
        if (this.transactionSetting != null) {
            properties["TransactionSetting"] = this.transactionSetting?.properties(
            );
        }
        if (this.experienceCapScriptId != null) {
            properties["ExperienceCapScriptId"] = this.experienceCapScriptId;
        }
        if (this.changeExperienceScript != null) {
            properties["ChangeExperienceScript"] = this.changeExperienceScript?.properties(
            );
        }
        if (this.changeRankScript != null) {
            properties["ChangeRankScript"] = this.changeRankScript?.properties(
            );
        }
        if (this.changeRankCapScript != null) {
            properties["ChangeRankCapScript"] = this.changeRankCapScript?.properties(
            );
        }
        if (this.overflowExperienceScript != null) {
            properties["OverflowExperienceScript"] = this.overflowExperienceScript?.properties(
            );
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
        experienceModels: ExperienceModel[],
    ): Namespace {
        new CurrentMasterData(
            this.stack,
            this.name,
            experienceModels,
        ).addDependsOn(
            this,
        );
        return this;
    }
}
