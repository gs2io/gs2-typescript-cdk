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
import InventoryModel from "./InventoryModel";
import SimpleInventoryModel from "./SimpleInventoryModel";
import BigInventoryModel from "./BigInventoryModel";

import { NamespaceOptions } from "./options/NamespaceOptions";

export default class Namespace extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly description: string|null = null;
    private readonly acquireScript: ScriptSetting|null = null;
    private readonly overflowScript: ScriptSetting|null = null;
    private readonly consumeScript: ScriptSetting|null = null;
    private readonly simpleItemAcquireScript: ScriptSetting|null = null;
    private readonly simpleItemConsumeScript: ScriptSetting|null = null;
    private readonly bigItemAcquireScript: ScriptSetting|null = null;
    private readonly bigItemConsumeScript: ScriptSetting|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "Inventory_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.description = options?.description ?? null;
        this.acquireScript = options?.acquireScript ?? null;
        this.overflowScript = options?.overflowScript ?? null;
        this.consumeScript = options?.consumeScript ?? null;
        this.simpleItemAcquireScript = options?.simpleItemAcquireScript ?? null;
        this.simpleItemConsumeScript = options?.simpleItemConsumeScript ?? null;
        this.bigItemAcquireScript = options?.bigItemAcquireScript ?? null;
        this.bigItemConsumeScript = options?.bigItemConsumeScript ?? null;
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
        return "GS2::Inventory::Namespace";
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
        if (this.acquireScript != null) {
            properties["AcquireScript"] = this.acquireScript?.properties(
            );
        }
        if (this.overflowScript != null) {
            properties["OverflowScript"] = this.overflowScript?.properties(
            );
        }
        if (this.consumeScript != null) {
            properties["ConsumeScript"] = this.consumeScript?.properties(
            );
        }
        if (this.simpleItemAcquireScript != null) {
            properties["SimpleItemAcquireScript"] = this.simpleItemAcquireScript?.properties(
            );
        }
        if (this.simpleItemConsumeScript != null) {
            properties["SimpleItemConsumeScript"] = this.simpleItemConsumeScript?.properties(
            );
        }
        if (this.bigItemAcquireScript != null) {
            properties["BigItemAcquireScript"] = this.bigItemAcquireScript?.properties(
            );
        }
        if (this.bigItemConsumeScript != null) {
            properties["BigItemConsumeScript"] = this.bigItemConsumeScript?.properties(
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
        inventoryModels: InventoryModel[],
        simpleInventoryModels: SimpleInventoryModel[],
        bigInventoryModels: BigInventoryModel[],
    ): Namespace {
        new CurrentMasterData(
            this.stack,
            this.name,
            inventoryModels,
            simpleInventoryModels,
            bigInventoryModels,
        ).addDependsOn(
            this,
        );
        return this;
    }
}
