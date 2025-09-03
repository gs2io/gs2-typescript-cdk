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
import { NamespacePriority } from "./enums/NamespacePriority";
import { NamespaceCurrency } from "./enums/NamespaceCurrency";

import { NamespaceOptions } from "./options/NamespaceOptions";

export default class Namespace extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly priority: NamespacePriority;
    private readonly shareFree: boolean;
    private readonly currency: NamespaceCurrency;
    private readonly description: string|null = null;
    private readonly transactionSetting: TransactionSetting|null = null;
    private readonly appleKey: string|null = null;
    private readonly googleKey: string|null = null;
    private readonly enableFakeReceipt: boolean|null = null;
    private readonly createWalletScript: ScriptSetting|null = null;
    private readonly depositScript: ScriptSetting|null = null;
    private readonly withdrawScript: ScriptSetting|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        priority: NamespacePriority,
        shareFree: boolean,
        currency: NamespaceCurrency,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "Money_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.priority = priority;
        this.shareFree = shareFree;
        this.currency = currency;
        this.description = options?.description ?? null;
        this.transactionSetting = options?.transactionSetting ?? null;
        this.appleKey = options?.appleKey ?? null;
        this.googleKey = options?.googleKey ?? null;
        this.enableFakeReceipt = options?.enableFakeReceipt ?? null;
        this.createWalletScript = options?.createWalletScript ?? null;
        this.depositScript = options?.depositScript ?? null;
        this.withdrawScript = options?.withdrawScript ?? null;
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
        return "GS2::Money::Namespace";
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
        if (this.priority != null) {
            properties["Priority"] = this.priority;
        }
        if (this.shareFree != null) {
            properties["ShareFree"] = this.shareFree;
        }
        if (this.currency != null) {
            properties["Currency"] = this.currency;
        }
        if (this.appleKey != null) {
            properties["AppleKey"] = this.appleKey;
        }
        if (this.googleKey != null) {
            properties["GoogleKey"] = this.googleKey;
        }
        if (this.enableFakeReceipt != null) {
            properties["EnableFakeReceipt"] = this.enableFakeReceipt;
        }
        if (this.createWalletScript != null) {
            properties["CreateWalletScript"] = this.createWalletScript?.properties(
            );
        }
        if (this.depositScript != null) {
            properties["DepositScript"] = this.depositScript?.properties(
            );
        }
        if (this.withdrawScript != null) {
            properties["WithdrawScript"] = this.withdrawScript?.properties(
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
}
