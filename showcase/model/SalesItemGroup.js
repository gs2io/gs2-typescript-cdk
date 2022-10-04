"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SalesItemGroup {
    constructor(name, salesItems, options) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.salesItems = salesItems;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.salesItems != null) {
            properties["SalesItems"] = this.salesItems.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = SalesItemGroup;
//# sourceMappingURL=SalesItemGroup.js.map