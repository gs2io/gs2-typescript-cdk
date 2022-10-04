"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayItemType = void 0;
const tslib_1 = require("tslib");
exports.DisplayItemType = {
    SALES_ITEM: "salesItem",
    SALES_ITEM_GROUP: "salesItemGroup",
};
const DisplayItemRef_1 = tslib_1.__importDefault(require("../ref/DisplayItemRef"));
class DisplayItem {
    constructor(displayItemId, type, options) {
        var _a, _b, _c;
        this.salesItem = null;
        this.salesItemGroup = null;
        this.salesPeriodEventId = null;
        this.displayItemId = displayItemId;
        this.type = type;
        this.salesItem = (_a = options === null || options === void 0 ? void 0 : options.salesItem) !== null && _a !== void 0 ? _a : null;
        this.salesItemGroup = (_b = options === null || options === void 0 ? void 0 : options.salesItemGroup) !== null && _b !== void 0 ? _b : null;
        this.salesPeriodEventId = (_c = options === null || options === void 0 ? void 0 : options.salesPeriodEventId) !== null && _c !== void 0 ? _c : null;
    }
    static salesItem(displayItemId, salesItem, options) {
        var _a, _b;
        return new DisplayItem(displayItemId, exports.DisplayItemType.SALES_ITEM, {
            salesItem: (_a = options === null || options === void 0 ? void 0 : options.salesItem) !== null && _a !== void 0 ? _a : null,
            salesPeriodEventId: (_b = options === null || options === void 0 ? void 0 : options.salesPeriodEventId) !== null && _b !== void 0 ? _b : null,
        });
    }
    static salesItemGroup(displayItemId, salesItemGroup, options) {
        var _a, _b;
        return new DisplayItem(displayItemId, exports.DisplayItemType.SALES_ITEM_GROUP, {
            salesItemGroup: (_a = options === null || options === void 0 ? void 0 : options.salesItemGroup) !== null && _a !== void 0 ? _a : null,
            salesPeriodEventId: (_b = options === null || options === void 0 ? void 0 : options.salesPeriodEventId) !== null && _b !== void 0 ? _b : null,
        });
    }
    properties() {
        let properties = {};
        if (this.displayItemId != null) {
            properties["DisplayItemId"] = this.displayItemId;
        }
        if (this.type != null) {
            properties["Type"] = this.type;
        }
        if (this.salesItem != null) {
            properties["SalesItem"] = this.salesItem.properties();
        }
        if (this.salesItemGroup != null) {
            properties["SalesItemGroup"] = this.salesItemGroup.properties();
        }
        if (this.salesPeriodEventId != null) {
            properties["SalesPeriodEventId"] = this.salesPeriodEventId;
        }
        return properties;
    }
    ref(namespaceName) {
        return new DisplayItemRef_1.default(namespaceName);
    }
}
exports.default = DisplayItem;
//# sourceMappingURL=DisplayItem.js.map