"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizeType = void 0;
exports.PrizeType = {
    ACTION: "action",
    PRIZE_TABLE: "prize_table",
};
class Prize {
    constructor(prizeId, type, weight, options) {
        var _a, _b, _c, _d;
        this.acquireActions = null;
        this.drawnLimit = null;
        this.limitFailOverPrizeId = null;
        this.prizeTableName = null;
        this.prizeId = prizeId;
        this.type = type;
        this.acquireActions = (_a = options === null || options === void 0 ? void 0 : options.acquireActions) !== null && _a !== void 0 ? _a : null;
        this.drawnLimit = (_b = options === null || options === void 0 ? void 0 : options.drawnLimit) !== null && _b !== void 0 ? _b : null;
        this.limitFailOverPrizeId = (_c = options === null || options === void 0 ? void 0 : options.limitFailOverPrizeId) !== null && _c !== void 0 ? _c : null;
        this.prizeTableName = (_d = options === null || options === void 0 ? void 0 : options.prizeTableName) !== null && _d !== void 0 ? _d : null;
        this.weight = weight;
    }
    static action(prizeId, acquireActions, weight, drawnLimit = null, limitFailOverPrizeId = null) {
        return new Prize(prizeId, exports.PrizeType.ACTION, weight, {
            acquireActions: acquireActions,
            drawnLimit: drawnLimit,
            limitFailOverPrizeId: limitFailOverPrizeId,
        });
    }
    static prizeTable(prizeId, acquireActions, prizeTableName, weight, drawnLimit = null) {
        return new Prize(prizeId, exports.PrizeType.PRIZE_TABLE, weight, {
            drawnLimit: drawnLimit,
            prizeTableName: prizeTableName,
        });
    }
    properties() {
        let properties = {};
        if (this.prizeId != null) {
            properties["PrizeId"] = this.prizeId;
        }
        if (this.type != null) {
            properties["Type"] = this.type.toString();
        }
        if (this.acquireActions != null) {
            properties["AcquireActions"] = this.acquireActions.map(v => v.properties());
        }
        if (this.drawnLimit != null) {
            properties["DrawnLimit"] = this.drawnLimit;
        }
        if (this.limitFailOverPrizeId != null) {
            properties["LimitFailOverPrizeId"] = this.limitFailOverPrizeId;
        }
        if (this.prizeTableName != null) {
            properties["PrizeTableName"] = this.prizeTableName;
        }
        if (this.weight != null) {
            properties["Weight"] = this.weight;
        }
        return properties;
    }
}
exports.default = Prize;
//# sourceMappingURL=Prize.js.map