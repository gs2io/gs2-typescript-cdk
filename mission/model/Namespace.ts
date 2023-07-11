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
import NotificationSetting from "../../core/model/NotificationSetting";
import LogSetting from "../../core/model/LogSetting";

import NamespaceRef from "../ref/NamespaceRef";
import CurrentMasterData from "./CurrentMasterData";
import MissionGroupModel from "./MissionGroupModel";
import CounterModel from "./CounterModel";

import { NamespaceOptions } from "./options/NamespaceOptions";

export default class Namespace extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly transactionSetting: TransactionSetting;
    private readonly description: string|null = null;
    private readonly missionCompleteScript: ScriptSetting|null = null;
    private readonly counterIncrementScript: ScriptSetting|null = null;
    private readonly receiveRewardsScript: ScriptSetting|null = null;
    private readonly completeNotification: NotificationSetting|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        transactionSetting: TransactionSetting,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "Mission_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.transactionSetting = transactionSetting;
        this.description = options?.description ?? null;
        this.missionCompleteScript = options?.missionCompleteScript ?? null;
        this.counterIncrementScript = options?.counterIncrementScript ?? null;
        this.receiveRewardsScript = options?.receiveRewardsScript ?? null;
        this.completeNotification = options?.completeNotification ?? null;
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
        return "GS2::Mission::Namespace";
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
        if (this.missionCompleteScript != null) {
            properties["MissionCompleteScript"] = this.missionCompleteScript?.properties(
            );
        }
        if (this.counterIncrementScript != null) {
            properties["CounterIncrementScript"] = this.counterIncrementScript?.properties(
            );
        }
        if (this.receiveRewardsScript != null) {
            properties["ReceiveRewardsScript"] = this.receiveRewardsScript?.properties(
            );
        }
        if (this.completeNotification != null) {
            properties["CompleteNotification"] = this.completeNotification?.properties(
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
            null,
            null,
            "Item.NamespaceId",
        );
    }

    public masterData(
        missionGroupModels: MissionGroupModel[],
        counterModels: CounterModel[],
    ): Namespace {
        new CurrentMasterData(
            this.stack,
            this.name,
            missionGroupModels,
            counterModels,
        ).addDependsOn(
            this,
        );
        return this;
    }
}
