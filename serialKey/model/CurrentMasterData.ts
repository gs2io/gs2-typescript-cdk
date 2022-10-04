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
import CampaignModel from "./CampaignModel";

export default class CurrentMasterData extends CdkResource {

    private version: string = "2022-09-13";
    private namespaceName: string;
        private readonly campaignModels: CampaignModel[];

    public constructor(
            stack: Stack,
            namespaceName: string,
            campaignModels: CampaignModel[],
    ) {
        super("SerialKey_CurrentCampaignMaster_" + namespaceName);

        this.namespaceName = namespaceName;
        this.campaignModels = campaignModels;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::SerialKey::CurrentCampaignMaster";
    }

    public properties(): {[name: string]: any} {
        return {
            "NamespaceName": this.namespaceName,
            "Settings": {
                "version": this.version,
                "campaignModels": this.campaignModels.map(v => v.properties()),
            },
        };
    }
}