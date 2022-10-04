"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BoxItems {
    constructor(boxId, prizeTableName, userId, options) {
        var _a;
        this.items = null;
        this.boxId = boxId;
        this.prizeTableName = prizeTableName;
        this.userId = userId;
        this.items = (_a = options === null || options === void 0 ? void 0 : options.items) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.boxId != null) {
            properties["BoxId"] = this.boxId;
        }
        if (this.prizeTableName != null) {
            properties["PrizeTableName"] = this.prizeTableName;
        }
        if (this.userId != null) {
            properties["UserId"] = this.userId;
        }
        if (this.items != null) {
            properties["Items"] = this.items.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = BoxItems;
//# sourceMappingURL=BoxItems.js.map