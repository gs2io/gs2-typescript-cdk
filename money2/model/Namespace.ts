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
import PlatformSetting from "./PlatformSetting";
import ScriptSetting from "../../core/model/ScriptSetting";
import NotificationSetting from "../../core/model/NotificationSetting";
import LogSetting from "../../core/model/LogSetting";

import NamespaceRef from "../ref/NamespaceRef";
import CurrentMasterData from "./CurrentMasterData";
import StoreContentModel from "./StoreContentModel";
import StoreSubscriptionContentModel from "./StoreSubscriptionContentModel";
import { NamespaceCurrencyUsagePriority } from "./enums/NamespaceCurrencyUsagePriority";

import { NamespaceOptions } from "./options/NamespaceOptions";

export default class Namespace extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly currencyUsagePriority: NamespaceCurrencyUsagePriority;
    private readonly sharedFreeCurrency: boolean;
    private readonly platformSetting: PlatformSetting;
    private readonly description: string|null = null;
    private readonly transactionSetting: TransactionSetting|null = null;
    private readonly depositBalanceScript: ScriptSetting|null = null;
    private readonly withdrawBalanceScript: ScriptSetting|null = null;
    private readonly verifyReceiptScript: ScriptSetting|null = null;
    private readonly subscribeScript: string|null = null;
    private readonly renewScript: string|null = null;
    private readonly unsubscribeScript: string|null = null;
    private readonly takeOverScript: ScriptSetting|null = null;
    private readonly changeSubscriptionStatusNotification: NotificationSetting|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        currencyUsagePriority: NamespaceCurrencyUsagePriority,
        sharedFreeCurrency: boolean,
        platformSetting: PlatformSetting,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "Money2_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.currencyUsagePriority = currencyUsagePriority;
        this.sharedFreeCurrency = sharedFreeCurrency;
        this.platformSetting = platformSetting;
        this.description = options?.description ?? null;
        this.transactionSetting = options?.transactionSetting ?? null;
        this.depositBalanceScript = options?.depositBalanceScript ?? null;
        this.withdrawBalanceScript = options?.withdrawBalanceScript ?? null;
        this.verifyReceiptScript = options?.verifyReceiptScript ?? null;
        this.subscribeScript = options?.subscribeScript ?? null;
        this.renewScript = options?.renewScript ?? null;
        this.unsubscribeScript = options?.unsubscribeScript ?? null;
        this.takeOverScript = options?.takeOverScript ?? null;
        this.changeSubscriptionStatusNotification = options?.changeSubscriptionStatusNotification ?? null;
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
        return "GS2::Money2::Namespace";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.currencyUsagePriority != null) {
            properties["CurrencyUsagePriority"] = this.currencyUsagePriority;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.transactionSetting != null) {
            properties["TransactionSetting"] = this.transactionSetting?.properties(
            );
        }
        if (this.sharedFreeCurrency != null) {
            properties["SharedFreeCurrency"] = this.sharedFreeCurrency;
        }
        if (this.platformSetting != null) {
            properties["PlatformSetting"] = this.platformSetting?.properties(
            );
        }
        if (this.depositBalanceScript != null) {
            properties["DepositBalanceScript"] = this.depositBalanceScript?.properties(
            );
        }
        if (this.withdrawBalanceScript != null) {
            properties["WithdrawBalanceScript"] = this.withdrawBalanceScript?.properties(
            );
        }
        if (this.verifyReceiptScript != null) {
            properties["VerifyReceiptScript"] = this.verifyReceiptScript?.properties(
            );
        }
        if (this.subscribeScript != null) {
            properties["SubscribeScript"] = this.subscribeScript;
        }
        if (this.renewScript != null) {
            properties["RenewScript"] = this.renewScript;
        }
        if (this.unsubscribeScript != null) {
            properties["UnsubscribeScript"] = this.unsubscribeScript;
        }
        if (this.takeOverScript != null) {
            properties["TakeOverScript"] = this.takeOverScript?.properties(
            );
        }
        if (this.changeSubscriptionStatusNotification != null) {
            properties["ChangeSubscriptionStatusNotification"] = this.changeSubscriptionStatusNotification?.properties(
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
        storeContentModels: StoreContentModel[],
        storeSubscriptionContentModels: StoreSubscriptionContentModel[],
    ): Namespace {
        new CurrentMasterData(
            this.stack,
            this.name,
            storeContentModels,
            storeSubscriptionContentModels,
        ).addDependsOn(
            this,
        );
        return this;
    }
}
