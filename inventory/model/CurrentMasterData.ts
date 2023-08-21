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
import InventoryModel from "./InventoryModel";
import SimpleInventoryModel from "./SimpleInventoryModel";
import BigInventoryModel from "./BigInventoryModel";

export default class CurrentMasterData extends CdkResource {
    private readonly version: string= "2019-02-05";
    private readonly namespaceName: string;
    private readonly inventoryModels: InventoryModel[];
    private readonly simpleInventoryModels: SimpleInventoryModel[];
    private readonly bigInventoryModels: BigInventoryModel[];

    public constructor(
        stack: Stack,
        namespaceName: string,
        inventoryModels: InventoryModel[],
        simpleInventoryModels: SimpleInventoryModel[],
        bigInventoryModels: BigInventoryModel[],
    ) {
        super(
            "Inventory_CurrentItemModelMaster_" + namespaceName
        );

        this.namespaceName = namespaceName;
        this.inventoryModels = inventoryModels;
        this.simpleInventoryModels = simpleInventoryModels;
        this.bigInventoryModels = bigInventoryModels;
        stack.addResource(
            this,
        );
    }

    public alternateKeys(
    ) {
        return this.namespaceName;
    }

    public resourceType(
    ): string {
        return "GS2::Inventory::CurrentItemModelMaster";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        let settings: {[name: string]: any} = {};

        settings["version"] = this.version
        if (this.inventoryModels != null) {
            settings["inventoryModels"] = this.inventoryModels.map(v => v.properties(
                ));
        }
        if (this.simpleInventoryModels != null) {
            settings["simpleInventoryModels"] = this.simpleInventoryModels.map(v => v.properties(
                ));
        }
        if (this.bigInventoryModels != null) {
            settings["bigInventoryModels"] = this.bigInventoryModels.map(v => v.properties(
                ));
        }

        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (settings != null) {
            properties["Settings"] = settings;
        }

        return properties;
    }
}