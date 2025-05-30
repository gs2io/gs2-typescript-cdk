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
import StoreContentModel from "./StoreContentModel";
import StoreSubscriptionContentModel from "./StoreSubscriptionContentModel";

export default class CurrentMasterData extends CdkResource {
    private readonly version: string= "2024-06-20";
    private readonly namespaceName: string;
    private readonly storeContentModels: StoreContentModel[];
    private readonly storeSubscriptionContentModels: StoreSubscriptionContentModel[];

    public constructor(
        stack: Stack,
        namespaceName: string,
        storeContentModels: StoreContentModel[],
        storeSubscriptionContentModels: StoreSubscriptionContentModel[],
    ) {
        super(
            "Money2_CurrentModelMaster_" + namespaceName
        );

        this.namespaceName = namespaceName;
        this.storeContentModels = storeContentModels;
        this.storeSubscriptionContentModels = storeSubscriptionContentModels;
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
        return "GS2::Money2::CurrentModelMaster";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        let settings: {[name: string]: any} = {};

        settings["version"] = this.version
        if (this.storeContentModels != null) {
            settings["storeContentModels"] = this.storeContentModels.map(v => v.properties(
                ));
        }
        if (this.storeSubscriptionContentModels != null) {
            settings["storeSubscriptionContentModels"] = this.storeSubscriptionContentModels.map(v => v.properties(
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