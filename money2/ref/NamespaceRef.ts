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
 *
 * deny overwrite
 */

import {GetAttr, Join} from "../../core/func";
import DailyTransactionHistoryRef from "./DailyTransactionHistoryRef";
import StoreContentModelRef from "./StoreContentModelRef";
import UnusedBalanceRef from "./UnusedBalanceRef";
import DepositByUserId from "../stampSheet/DepositByUserId";
import DepositTransaction from "../model/DepositTransaction";
import WithdrawByUserId from "../stampSheet/WithdrawByUserId";
import VerifyReceiptByUserId from "../stampSheet/VerifyReceiptByUserId";
import Receipt from "../model/Receipt";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public storeContentModel(
        contentName: string,
    ): StoreContentModelRef {
        return new StoreContentModelRef(
            this.namespaceName,
            contentName,
        );
    }

    public deposit(
        slot: number,
        depositTransactions: DepositTransaction[],
        userId: string = "#{userId}",
    ): DepositByUserId {
        return new DepositByUserId(
            this.namespaceName,
            slot,
            depositTransactions,
            userId,
        );
    }

    public withdraw(
        slot: number,
        withdrawCount: number,
        paidOnly: boolean|null = null,
        userId: string = "#{userId}",
    ): WithdrawByUserId {
        return new WithdrawByUserId(
            this.namespaceName,
            slot,
            withdrawCount,
            paidOnly,
            userId,
        );
    }

    public verifyReceipt(
        contentName: string,
        receipt: string = "#{receipt}",
        userId: string = "#{userId}",
    ): VerifyReceiptByUserId {
        return new VerifyReceiptByUserId(
            this.namespaceName,
            contentName,
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
                "money2",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
