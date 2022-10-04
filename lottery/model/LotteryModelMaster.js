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
exports.LotteryModelMasterMethod = exports.LotteryModelMasterMode = void 0;
const tslib_1 = require("tslib");
const core_1 = tslib_1.__importDefault(require("../../core"));
const func_1 = require("../../core/func");
exports.LotteryModelMasterMode = {
    NORMAL: "normal",
    BOX: "box",
};
exports.LotteryModelMasterMethod = {
    PRIZE_TABLE: "prize_table",
    SCRIPT: "script",
};
const LotteryModelMasterRef_1 = tslib_1.__importDefault(require("../ref/LotteryModelMasterRef"));
class LotteryModelMaster extends core_1.default.CdkResource {
    constructor(stack, namespaceName, name, mode, method, options) {
        var _a, _b, _c, _d;
        super("Lottery_LotteryModelMaster_" + name);
        this.description = null;
        this.metadata = null;
        this.prizeTableName = null;
        this.choicePrizeTableScriptId = null;
        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.metadata = (_b = options === null || options === void 0 ? void 0 : options.metadata) !== null && _b !== void 0 ? _b : null;
        this.mode = mode;
        this.method = method;
        this.prizeTableName = (_c = options === null || options === void 0 ? void 0 : options.prizeTableName) !== null && _c !== void 0 ? _c : null;
        this.choicePrizeTableScriptId = (_d = options === null || options === void 0 ? void 0 : options.choicePrizeTableScriptId) !== null && _d !== void 0 ? _d : null;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Lottery::LotteryModelMaster";
    }
    properties() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.mode != null) {
            properties["Mode"] = this.mode;
        }
        if (this.method != null) {
            properties["Method"] = this.method;
        }
        if (this.prizeTableName != null) {
            properties["PrizeTableName"] = this.prizeTableName;
        }
        if (this.choicePrizeTableScriptId != null) {
            properties["ChoicePrizeTableScriptId"] = this.choicePrizeTableScriptId;
        }
        return properties;
    }
    ref(namespaceName) {
        return new LotteryModelMasterRef_1.default(namespaceName, this.name);
    }
    getAttrLotteryModelId() {
        return new func_1.GetAttr(null, null, "Item.LotteryModelId");
    }
}
exports.default = LotteryModelMaster;
//# sourceMappingURL=LotteryModelMaster.js.map