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

import {GetAttr, Join} from "../../core/func";
import CurrentCampaignMasterRef from "./CurrentCampaignMasterRef";
import CampaignModelRef from "./CampaignModelRef";
import SerialKeyRef from "./SerialKeyRef";
import CampaignModelMasterRef from "./CampaignModelMasterRef";


export default class NamespaceRef {
    private namespaceName: string;

    public constructor(
            namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public currentCampaignMaster(
    ): CurrentCampaignMasterRef {
        return new CurrentCampaignMasterRef(
            this.namespaceName,
        );
    }

    public campaignModel(
            campaignModelName: string,
    ): CampaignModelRef {
        return new CampaignModelRef(
            this.namespaceName,
            campaignModelName,
        );
    }

    public serialKey(
            serialKeyCode: string,
    ): SerialKeyRef {
        return new SerialKeyRef(
            this.namespaceName,
            serialKeyCode,
        );
    }

    public campaignModelMaster(
            campaignModelName: string,
    ): CampaignModelMasterRef {
        return new CampaignModelMasterRef(
            this.namespaceName,
            campaignModelName,
        );
    }

    public grn(): string {
        return new Join(
            ":",
            [
                "grn",
                "gs2",
                GetAttr.region().str(),
                GetAttr.ownerId().str(),
                "serialKey",
                this.namespaceName
            ]
        ).str();
    }
}
