"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PrizeType_1 = require("./enum/PrizeType");
class Prize {
    constructor(prizeId, type, weight, options = null) {
        var _a, _b, _c, _d;
        this.acquireActions = null;
        this.drawnLimit = null;
        this.limitFailOverPrizeId = null;
        this.prizeTableName = null;
        this.prizeId = prizeId;
        this.type = type;
        this.weight = weight;
        this.acquireActions = (_a = options === null || options === void 0 ? void 0 : options.acquireActions) !== null && _a !== void 0 ? _a : null;
        this.drawnLimit = (_b = options === null || options === void 0 ? void 0 : options.drawnLimit) !== null && _b !== void 0 ? _b : null;
        this.limitFailOverPrizeId = (_c = options === null || options === void 0 ? void 0 : options.limitFailOverPrizeId) !== null && _c !== void 0 ? _c : null;
        this.prizeTableName = (_d = options === null || options === void 0 ? void 0 : options.prizeTableName) !== null && _d !== void 0 ? _d : null;
    }
    static typeIsAction(prizeId, weight, acquireActions, options = null) {
        return new Prize(prizeId, PrizeType_1.PrizeType.ACTION, weight, {
            acquireActions: acquireActions,
            drawnLimit: options === null || options === void 0 ? void 0 : options.drawnLimit,
        });
    }
    static typeIsPrizeTable(prizeId, weight, prizeTableName, options = null) {
        return new Prize(prizeId, PrizeType_1.PrizeType.PRIZE_TABLE, weight, {
            prizeTableName: prizeTableName,
            drawnLimit: options === null || options === void 0 ? void 0 : options.drawnLimit,
        });
    }
    properties() {
        let properties = {};
        if (this.prizeId != null) {
            properties["prizeId"] = this.prizeId;
        }
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties());
        }
        if (this.drawnLimit != null) {
            properties["drawnLimit"] = this.drawnLimit;
        }
        if (this.limitFailOverPrizeId != null) {
            properties["limitFailOverPrizeId"] = this.limitFailOverPrizeId;
        }
        if (this.prizeTableName != null) {
            properties["prizeTableName"] = this.prizeTableName;
        }
        if (this.weight != null) {
            properties["weight"] = this.weight;
        }
        return properties;
    }
}
exports.default = Prize;
//# sourceMappingURL=Prize.js.map