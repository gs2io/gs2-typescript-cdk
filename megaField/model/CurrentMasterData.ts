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
import AreaModel from "./AreaModel";

export default class CurrentMasterData extends CdkResource {
    private readonly version: string= "2022-08-28";
    private readonly namespaceName: string;
    private readonly areaModels: AreaModel[];

    public constructor(
        stack: Stack,
        namespaceName: string,
        areaModels: AreaModel[],
    ) {
        super(
            "MegaField_CurrentFieldMaster_" + namespaceName
        );

        this.namespaceName = namespaceName;
        this.areaModels = areaModels;
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
        return "GS2::MegaField::CurrentFieldMaster";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        let settings: {[name: string]: any} = {};

        settings["version"] = this.version
        if (this.areaModels != null) {
            settings["areaModels"] = this.areaModels.map(v => v.properties(
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