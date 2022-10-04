"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../core/model");
class CurrentMasterData extends model_1.CdkResource {
    constructor(stack, namespaceName, lotteryModels, prizeTables) {
        super("Lottery_CurrentLotteryMaster_" + namespaceName);
        this.version = "2019-02-21";
        this.namespaceName = namespaceName;
        this.lotteryModels = lotteryModels;
        this.prizeTables = prizeTables;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Lottery::CurrentLotteryMaster";
    }
    properties() {
        return {
            "NamespaceName": this.namespaceName,
            "Settings": {
                "version": this.version,
                "lotteryModels": this.lotteryModels.map(v => v.properties()),
                "prizeTables": this.prizeTables.map(v => v.properties()),
            },
        };
    }
}
exports.default = CurrentMasterData;
//# sourceMappingURL=CurrentMasterData.js.map