"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const func_1 = require("../../core/func");
class DailyTransactionHistoryRef {
    constructor(namespaceName, year, month, day, currency) {
        this.namespaceName = namespaceName;
        this.year = year;
        this.month = month;
        this.day = day;
        this.currency = currency;
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "money2",
            this.namespaceName,
            "transaction",
            "history",
            "daily",
            "" + this.year,
            "" + this.month,
            "" + this.day,
            "currency",
            this.currency,
        ]).str();
    }
}
exports.default = DailyTransactionHistoryRef;
//# sourceMappingURL=DailyTransactionHistoryRef.js.map