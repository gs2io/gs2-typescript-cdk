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
exports.LotteryModelMethod = exports.LotteryModelMode = void 0;
const tslib_1 = require("tslib");
exports.LotteryModelMode = {
    NORMAL: "normal",
    BOX: "box",
};
exports.LotteryModelMethod = {
    PRIZE_TABLE: "prize_table",
    SCRIPT: "script",
};
const LotteryModelRef_1 = tslib_1.__importDefault(require("../ref/LotteryModelRef"));
class LotteryModel {
    constructor(name, mode, method, options) {
        var _a, _b, _c;
        this.metadata = null;
        this.prizeTableName = null;
        this.choicePrizeTableScriptId = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.mode = mode;
        this.method = method;
        this.prizeTableName = (_b = options === null || options === void 0 ? void 0 : options.prizeTableName) !== null && _b !== void 0 ? _b : null;
        this.choicePrizeTableScriptId = (_c = options === null || options === void 0 ? void 0 : options.choicePrizeTableScriptId) !== null && _c !== void 0 ? _c : null;
    }
    static prizeTable(name, mode, prizeTableName, options) {
        var _a, _b;
        return new LotteryModel(name, mode, exports.LotteryModelMethod.PRIZE_TABLE, {
            metadata: (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null,
            prizeTableName: (_b = options === null || options === void 0 ? void 0 : options.prizeTableName) !== null && _b !== void 0 ? _b : null,
        });
    }
    static script(name, mode, choicePrizeTableScriptId, options) {
        var _a, _b;
        return new LotteryModel(name, mode, exports.LotteryModelMethod.SCRIPT, {
            metadata: (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null,
            choicePrizeTableScriptId: (_b = options === null || options === void 0 ? void 0 : options.choicePrizeTableScriptId) !== null && _b !== void 0 ? _b : null,
        });
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
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
        return new LotteryModelRef_1.default(namespaceName, this.name);
    }
}
exports.default = LotteryModel;
//# sourceMappingURL=LotteryModel.js.map