"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const InventoryModelRef_1 = tslib_1.__importDefault(require("../ref/InventoryModelRef"));
class InventoryModel {
    constructor(name, initialCapacity, maxCapacity, options) {
        var _a, _b, _c;
        this.metadata = null;
        this.protectReferencedItem = null;
        this.itemModels = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.initialCapacity = initialCapacity;
        this.maxCapacity = maxCapacity;
        this.protectReferencedItem = (_b = options === null || options === void 0 ? void 0 : options.protectReferencedItem) !== null && _b !== void 0 ? _b : null;
        this.itemModels = (_c = options === null || options === void 0 ? void 0 : options.itemModels) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.initialCapacity != null) {
            properties["InitialCapacity"] = this.initialCapacity;
        }
        if (this.maxCapacity != null) {
            properties["MaxCapacity"] = this.maxCapacity;
        }
        if (this.protectReferencedItem != null) {
            properties["ProtectReferencedItem"] = this.protectReferencedItem;
        }
        if (this.itemModels != null) {
            properties["ItemModels"] = this.itemModels.map(v => v.properties());
        }
        return properties;
    }
    ref(namespaceName) {
        return new InventoryModelRef_1.default(namespaceName, this.name);
    }
}
exports.default = InventoryModel;
//# sourceMappingURL=InventoryModel.js.map