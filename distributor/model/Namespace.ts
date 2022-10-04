/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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

import core from "../../core";
import {GetAttr} from "../../core/func";
import {Stack} from "../../core/model";
import NotificationSetting from "../../core/model/NotificationSetting";
import LogSetting from "../../core/model/LogSetting";
import CurrentMasterData from "./CurrentMasterData";
import DistributorModel from "./DistributorModel";

import NamespaceRef from "../ref/NamespaceRef";

export interface NamespaceOptions {
    description?: string|null|undefined;
    assumeUserId?: string|null|undefined;
    autoRunStampSheetNotification?: NotificationSetting|null|undefined;
    logSetting?: LogSetting|null|undefined;
}

export default class Namespace extends core.CdkResource {

    private stack: Stack;
	private readonly name: string;
	private readonly description: string|null = null;
	private readonly assumeUserId: string|null = null;
	private readonly autoRunStampSheetNotification: NotificationSetting|null = null;
	private readonly logSetting: LogSetting|null = null;

    public constructor(
            stack: Stack,
            name: string,
            options?: NamespaceOptions,
    ) {
        super("Distributor_Namespace_" + name);

        this.stack = stack;
        this.name = name;
        this.description = options?.description ?? null;
        this.assumeUserId = options?.assumeUserId ?? null;
        this.autoRunStampSheetNotification = options?.autoRunStampSheetNotification ?? null;
        this.logSetting = options?.logSetting ?? null;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Distributor::Namespace";
    }

    public properties(): {[name: string]: any} {
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
        if (this.autoRunStampSheetNotification != null) {
            properties["AutoRunStampSheetNotification"] = this.autoRunStampSheetNotification.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = this.logSetting.properties();
        }
        return properties;
    }

    public ref(
    ): NamespaceRef {
        return new NamespaceRef(
            this.name,
        );
    }

    public getAttrNamespaceId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.NamespaceId"
        );
    }

    public masterData(
            distributorModels: DistributorModel[],
    ): Namespace {
        new CurrentMasterData(
            this.stack,
            this.name,
            distributorModels,
        ).addDependsOn(
            this
        );
        return this;
    }
}
