"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ShowcaseRef_1 = tslib_1.__importDefault(require("../ref/ShowcaseRef"));
class Showcase {
    constructor(name, displayItems, options) {
        var _a, _b;
        this.metadata = null;
        this.salesPeriodEventId = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.salesPeriodEventId = (_b = options === null || options === void 0 ? void 0 : options.salesPeriodEventId) !== null && _b !== void 0 ? _b : null;
        this.displayItems = displayItems;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.salesPeriodEventId != null) {
            properties["SalesPeriodEventId"] = this.salesPeriodEventId;
        }
        if (this.displayItems != null) {
            properties["DisplayItems"] = this.displayItems.map(v => v.properties());
        }
        return properties;
    }
    ref(namespaceName) {
        return new ShowcaseRef_1.default(namespaceName, this.name);
    }
}
exports.default = Showcase;
//# sourceMappingURL=Showcase.js.map