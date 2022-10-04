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
exports.DisplayItemMasterType = void 0;
exports.DisplayItemMasterType = {
    SALES_ITEM: "salesItem",
    SALES_ITEM_GROUP: "salesItemGroup",
};
class DisplayItemMaster {
    constructor(displayItemId, type, options) {
        var _a, _b, _c;
        this.salesItemName = null;
        this.salesItemGroupName = null;
        this.salesPeriodEventId = null;
        this.displayItemId = displayItemId;
        this.type = type;
        this.salesItemName = (_a = options === null || options === void 0 ? void 0 : options.salesItemName) !== null && _a !== void 0 ? _a : null;
        this.salesItemGroupName = (_b = options === null || options === void 0 ? void 0 : options.salesItemGroupName) !== null && _b !== void 0 ? _b : null;
        this.salesPeriodEventId = (_c = options === null || options === void 0 ? void 0 : options.salesPeriodEventId) !== null && _c !== void 0 ? _c : null;
    }
    static salesItem(displayItemId, salesItemName, salesPeriodEventId = null) {
        return new DisplayItemMaster(displayItemId, exports.DisplayItemMasterType.SALES_ITEM, {
            salesItemName: salesItemName,
            salesPeriodEventId: salesPeriodEventId,
        });
    }
    static salesItemGroup(displayItemId, salesItemGroupName, salesPeriodEventId = null) {
        return new DisplayItemMaster(displayItemId, exports.DisplayItemMasterType.SALES_ITEM_GROUP, {
            salesItemGroupName: salesItemGroupName,
            salesPeriodEventId: salesPeriodEventId,
        });
    }
    properties() {
        let properties = {};
        if (this.displayItemId != null) {
            properties["DisplayItemId"] = this.displayItemId;
        }
        if (this.type != null) {
            properties["Type"] = this.type.toString();
        }
        if (this.salesItemName != null) {
            properties["SalesItemName"] = this.salesItemName;
        }
        if (this.salesItemGroupName != null) {
            properties["SalesItemGroupName"] = this.salesItemGroupName;
        }
        if (this.salesPeriodEventId != null) {
            properties["SalesPeriodEventId"] = this.salesPeriodEventId;
        }
        return properties;
    }
}
exports.default = DisplayItemMaster;
//# sourceMappingURL=DisplayItemMaster.js.map