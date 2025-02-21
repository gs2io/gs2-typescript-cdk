"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LotteryModelMethod_1 = require("./enums/LotteryModelMethod");
class LotteryModel {
    constructor(name, mode, method, options = null) {
        var _a, _b, _c;
        this.metadata = null;
        this.prizeTableName = null;
        this.choicePrizeTableScriptId = null;
        this.name = name;
        this.mode = mode;
        this.method = method;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.prizeTableName = (_b = options === null || options === void 0 ? void 0 : options.prizeTableName) !== null && _b !== void 0 ? _b : null;
        this.choicePrizeTableScriptId = (_c = options === null || options === void 0 ? void 0 : options.choicePrizeTableScriptId) !== null && _c !== void 0 ? _c : null;
    }
    static methodIsPrizeTable(name, mode, prizeTableName, options = null) {
        return new LotteryModel(name, mode, LotteryModelMethod_1.LotteryModelMethod.PRIZE_TABLE, {
            prizeTableName: prizeTableName,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
        });
    }
    static methodIsScript(name, mode, choicePrizeTableScriptId, options = null) {
        return new LotteryModel(name, mode, LotteryModelMethod_1.LotteryModelMethod.SCRIPT, {
            choicePrizeTableScriptId: choicePrizeTableScriptId,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
        });
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.mode != null) {
            properties["mode"] = this.mode;
        }
        if (this.method != null) {
            properties["method"] = this.method;
        }
        if (this.prizeTableName != null) {
            properties["prizeTableName"] = this.prizeTableName;
        }
        if (this.choicePrizeTableScriptId != null) {
            properties["choicePrizeTableScriptId"] = this.choicePrizeTableScriptId;
        }
        return properties;
    }
}
exports.default = LotteryModel;
//# sourceMappingURL=LotteryModel.js.map