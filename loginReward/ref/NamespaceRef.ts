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
import BonusModelRef from "./BonusModelRef";
import DeleteReceiveStatusByUserId from "../stampSheet/DeleteReceiveStatusByUserId";
import UnmarkReceivedByUserId from "../stampSheet/UnmarkReceivedByUserId";
import MarkReceivedByUserId from "../stampSheet/MarkReceivedByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public bonusModel(
        bonusModelName: string,
    ): BonusModelRef {
        return new BonusModelRef(
            this.namespaceName,
            bonusModelName,
        );
    }

    public deleteReceiveStatus(
        bonusModelName: string,
        userId: string|null = "#{userId}",
    ): DeleteReceiveStatusByUserId {
        return new DeleteReceiveStatusByUserId(
            this.namespaceName,
            bonusModelName,
            userId,
        );
    }

    public unmarkReceived(
        bonusModelName: string,
        stepNumber: number,
        userId: string|null = "#{userId}",
    ): UnmarkReceivedByUserId {
        return new UnmarkReceivedByUserId(
            this.namespaceName,
            bonusModelName,
            stepNumber,
            userId,
        );
    }

    public markReceived(
        bonusModelName: string,
        stepNumber: number,
        userId: string|null = "#{userId}",
    ): MarkReceivedByUserId {
        return new MarkReceivedByUserId(
            this.namespaceName,
            bonusModelName,
            stepNumber,
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
                "loginReward",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
