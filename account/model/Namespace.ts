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
import TakeOverTypeModel from "./TakeOverTypeModel";

import { NamespaceOptions } from "./options/NamespaceOptions";

export default class Namespace extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly description: string|null = null;
    private readonly changePasswordIfTakeOver: boolean|null = null;
    private readonly differentUserIdForLoginAndDataRetention: boolean|null = null;
    private readonly createAccountScript: ScriptSetting|null = null;
    private readonly authenticationScript: ScriptSetting|null = null;
    private readonly createTakeOverScript: ScriptSetting|null = null;
    private readonly doTakeOverScript: ScriptSetting|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "Account_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.description = options?.description ?? null;
        this.changePasswordIfTakeOver = options?.changePasswordIfTakeOver ?? null;
        this.differentUserIdForLoginAndDataRetention = options?.differentUserIdForLoginAndDataRetention ?? null;
        this.createAccountScript = options?.createAccountScript ?? null;
        this.authenticationScript = options?.authenticationScript ?? null;
        this.createTakeOverScript = options?.createTakeOverScript ?? null;
        this.doTakeOverScript = options?.doTakeOverScript ?? null;
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
        return "GS2::Account::Namespace";
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
        if (this.changePasswordIfTakeOver != null) {
            properties["ChangePasswordIfTakeOver"] = this.changePasswordIfTakeOver;
        }
        if (this.differentUserIdForLoginAndDataRetention != null) {
            properties["DifferentUserIdForLoginAndDataRetention"] = this.differentUserIdForLoginAndDataRetention;
        }
        if (this.createAccountScript != null) {
            properties["CreateAccountScript"] = this.createAccountScript?.properties(
            );
        }
        if (this.authenticationScript != null) {
            properties["AuthenticationScript"] = this.authenticationScript?.properties(
            );
        }
        if (this.createTakeOverScript != null) {
            properties["CreateTakeOverScript"] = this.createTakeOverScript?.properties(
            );
        }
        if (this.doTakeOverScript != null) {
            properties["DoTakeOverScript"] = this.doTakeOverScript?.properties(
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
        takeOverTypeModels: TakeOverTypeModel[],
    ): Namespace {
        new CurrentMasterData(
            this.stack,
            this.name,
            takeOverTypeModels,
        ).addDependsOn(
            this,
        );
        return this;
    }
}
