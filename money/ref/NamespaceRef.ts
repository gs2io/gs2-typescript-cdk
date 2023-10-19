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
import DepositByUserId from "../stampSheet/DepositByUserId";
import RevertRecordReceipt from "../stampSheet/RevertRecordReceipt";
import WithdrawByUserId from "../stampSheet/WithdrawByUserId";
import RecordReceipt from "../stampSheet/RecordReceipt";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public deposit(
        slot: number,
        price: number,
        count: number,
        userId: string|null = "#{userId}",
    ): DepositByUserId {
        return new DepositByUserId(
            this.namespaceName,
            slot,
            price,
            count,
            userId,
        );
    }

    public revertRecordReceipt(
        receipt: string,
        userId: string|null = "#{userId}",
    ): RevertRecordReceipt {
        return new RevertRecordReceipt(
            this.namespaceName,
            receipt,
            userId,
        );
    }

    public withdraw(
        slot: number,
        count: number,
        paidOnly: boolean|null = null,
        userId: string|null = "#{userId}",
    ): WithdrawByUserId {
        return new WithdrawByUserId(
            this.namespaceName,
            slot,
            count,
            paidOnly,
            userId,
        );
    }

    public recordReceipt(
        contentsId: string,
        receipt: string,
        userId: string|null = "#{userId}",
    ): RecordReceipt {
        return new RecordReceipt(
            this.namespaceName,
            contentsId,
            receipt,
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
                "money",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
