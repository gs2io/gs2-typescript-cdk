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

import {GetAttr, Join} from "../../core/func";
import CampaignModelRef from "./CampaignModelRef";
import RevertUseByUserId from "../stampSheet/RevertUseByUserId";
import UseByUserId from "../stampSheet/UseByUserId";
import VerifyCodeByUserId from "../stampSheet/VerifyCodeByUserId";
import { SerialKeyVerifyType } from "../stampSheet/enum/SerialKeyVerifyType";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public campaignModel(
        campaignModelName: string,
    ): CampaignModelRef {
        return new CampaignModelRef(
            this.namespaceName,
            campaignModelName,
        );
    }

    public revertUse(
        code: string,
        userId: string = "#{userId}",
    ): RevertUseByUserId {
        return new RevertUseByUserId(
            this.namespaceName,
            code,
            userId,
        );
    }

    public use(
        code: string,
        userId: string = "#{userId}",
    ): UseByUserId {
        return new UseByUserId(
            this.namespaceName,
            code,
            userId,
        );
    }

    public verifyCode(
        code: string,
        verifyType: SerialKeyVerifyType,
        userId: string = "#{userId}",
    ): VerifyCodeByUserId {
        return new VerifyCodeByUserId(
            this.namespaceName,
            code,
            verifyType,
            userId,
        );
    }

    public grn(
    ): string {
        return new Join(
            ":",
            [
                "grn",
                "gs2",
                GetAttr.region(
                ).str(
                ),
                GetAttr.ownerId(
                ).str(
                ),
                "serialKey",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
