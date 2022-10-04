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

import {CdkResource, Stack} from "../../core/model";
import InventoryModel from "./InventoryModel";

export default class CurrentMasterData extends CdkResource {

    private version: string = "2019-02-05";
    private namespaceName: string;
        private readonly inventoryModels: InventoryModel[];

    public constructor(
            stack: Stack,
            namespaceName: string,
            inventoryModels: InventoryModel[],
    ) {
        super("Inventory_CurrentItemModelMaster_" + namespaceName);

        this.namespaceName = namespaceName;
        this.inventoryModels = inventoryModels;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Inventory::CurrentItemModelMaster";
    }

    public properties(): {[name: string]: any} {
        return {
            "NamespaceName": this.namespaceName,
            "Settings": {
                "version": this.version,
                "inventoryModels": this.inventoryModels.map(v => v.properties()),
            },
        };
    }
}