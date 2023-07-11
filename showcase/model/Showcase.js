"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Showcase {
    constructor(name, displayItems, options = null) {
        var _a, _b;
        this.metadata = null;
        this.salesPeriodEventId = null;
        this.name = name;
        this.displayItems = displayItems;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.salesPeriodEventId = (_b = options === null || options === void 0 ? void 0 : options.salesPeriodEventId) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.salesPeriodEventId != null) {
            properties["salesPeriodEventId"] = this.salesPeriodEventId;
        }
        if (this.displayItems != null) {
            properties["displayItems"] = this.displayItems.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = Showcase;
//# sourceMappingURL=Showcase.js.map