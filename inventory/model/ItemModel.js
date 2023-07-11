"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemModel {
    constructor(name, stackingLimit, allowMultipleStacks, sortValue, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.stackingLimit = stackingLimit;
        this.allowMultipleStacks = allowMultipleStacks;
        this.sortValue = sortValue;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.stackingLimit != null) {
            properties["stackingLimit"] = this.stackingLimit;
        }
        if (this.allowMultipleStacks != null) {
            properties["allowMultipleStacks"] = this.allowMultipleStacks;
        }
        if (this.sortValue != null) {
            properties["sortValue"] = this.sortValue;
        }
        return properties;
    }
}
exports.default = ItemModel;
//# sourceMappingURL=ItemModel.js.map