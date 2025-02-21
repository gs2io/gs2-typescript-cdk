"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayItemType_1 = require("./enums/DisplayItemType");
class DisplayItem {
    constructor(displayItemId, type, options = null) {
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
    static typeIsSalesItem(displayItemId, salesItem, options = null) {
        return new DisplayItem(displayItemId, DisplayItemType_1.DisplayItemType.SALES_ITEM, {
            salesItem: salesItem,
            salesPeriodEventId: options === null || options === void 0 ? void 0 : options.salesPeriodEventId,
        });
    }
    static typeIsSalesItemGroup(displayItemId, salesItemGroup, options = null) {
        return new DisplayItem(displayItemId, DisplayItemType_1.DisplayItemType.SALES_ITEM_GROUP, {
            salesItemGroup: salesItemGroup,
            salesPeriodEventId: options === null || options === void 0 ? void 0 : options.salesPeriodEventId,
        });
    }
    properties() {
        var _a, _b;
        let properties = {};
        if (this.displayItemId != null) {
            properties["displayItemId"] = this.displayItemId;
        }
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.salesItem != null) {
            properties["salesItem"] = (_a = this.salesItem) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.salesItemGroup != null) {
            properties["salesItemGroup"] = (_b = this.salesItemGroup) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.salesPeriodEventId != null) {
            properties["salesPeriodEventId"] = this.salesPeriodEventId;
        }
        return properties;
    }
}
exports.default = DisplayItem;
//# sourceMappingURL=DisplayItem.js.map