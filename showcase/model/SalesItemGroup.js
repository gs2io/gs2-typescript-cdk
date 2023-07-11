"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SalesItemGroup {
    constructor(name, salesItems, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.salesItems = salesItems;
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
        if (this.salesItems != null) {
            properties["salesItems"] = this.salesItems.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = SalesItemGroup;
//# sourceMappingURL=SalesItemGroup.js.map