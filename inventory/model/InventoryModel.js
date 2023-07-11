"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryModel {
    constructor(name, initialCapacity, maxCapacity, itemModels, options = null) {
        var _a, _b;
        this.metadata = null;
        this.protectReferencedItem = null;
        this.name = name;
        this.initialCapacity = initialCapacity;
        this.maxCapacity = maxCapacity;
        this.itemModels = itemModels;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.protectReferencedItem = (_b = options === null || options === void 0 ? void 0 : options.protectReferencedItem) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.initialCapacity != null) {
            properties["initialCapacity"] = this.initialCapacity;
        }
        if (this.maxCapacity != null) {
            properties["maxCapacity"] = this.maxCapacity;
        }
        if (this.protectReferencedItem != null) {
            properties["protectReferencedItem"] = this.protectReferencedItem;
        }
        if (this.itemModels != null) {
            properties["itemModels"] = this.itemModels.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = InventoryModel;
//# sourceMappingURL=InventoryModel.js.map