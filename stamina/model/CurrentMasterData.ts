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
import StaminaModel from "./StaminaModel";

export default class CurrentMasterData extends CdkResource {
    private readonly version: string= "2019-02-14";
    private readonly namespaceName: string;
    private readonly staminaModels: StaminaModel[];

    public constructor(
        stack: Stack,
        namespaceName: string,
        staminaModels: StaminaModel[],
    ) {
        super(
            "Stamina_CurrentStaminaMaster_" + namespaceName
        );

        this.namespaceName = namespaceName;
        this.staminaModels = staminaModels;
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
        return "GS2::Stamina::CurrentStaminaMaster";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        let settings: {[name: string]: any} = {};

        settings["version"] = this.version
        if (this.staminaModels != null) {
            settings["staminaModels"] = this.staminaModels.map(v => v.properties(
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