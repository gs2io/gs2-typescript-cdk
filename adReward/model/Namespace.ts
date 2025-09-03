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
import AdMob from "./AdMob";
import UnityAd from "./UnityAd";
import AppLovinMax from "./AppLovinMax";
import ScriptSetting from "../../core/model/ScriptSetting";
import NotificationSetting from "../../core/model/NotificationSetting";
import LogSetting from "../../core/model/LogSetting";

import NamespaceRef from "../ref/NamespaceRef";

import { NamespaceOptions } from "./options/NamespaceOptions";

export default class Namespace extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly description: string|null = null;
    private readonly transactionSetting: TransactionSetting|null = null;
    private readonly admob: AdMob|null = null;
    private readonly unityAd: UnityAd|null = null;
    private readonly appLovinMaxes: AppLovinMax[]|null = null;
    private readonly acquirePointScript: ScriptSetting|null = null;
    private readonly consumePointScript: ScriptSetting|null = null;
    private readonly changePointNotification: NotificationSetting|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "AdReward_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.description = options?.description ?? null;
        this.transactionSetting = options?.transactionSetting ?? null;
        this.admob = options?.admob ?? null;
        this.unityAd = options?.unityAd ?? null;
        this.appLovinMaxes = options?.appLovinMaxes ?? null;
        this.acquirePointScript = options?.acquirePointScript ?? null;
        this.consumePointScript = options?.consumePointScript ?? null;
        this.changePointNotification = options?.changePointNotification ?? null;
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
        return "GS2::AdReward::Namespace";
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
        if (this.admob != null) {
            properties["Admob"] = this.admob?.properties(
            );
        }
        if (this.unityAd != null) {
            properties["UnityAd"] = this.unityAd?.properties(
            );
        }
        if (this.appLovinMaxes != null) {
            properties["AppLovinMaxes"] = this.appLovinMaxes.map(v => v.properties(
                ));
        }
        if (this.acquirePointScript != null) {
            properties["AcquirePointScript"] = this.acquirePointScript?.properties(
            );
        }
        if (this.consumePointScript != null) {
            properties["ConsumePointScript"] = this.consumePointScript?.properties(
            );
        }
        if (this.changePointNotification != null) {
            properties["ChangePointNotification"] = this.changePointNotification?.properties(
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
