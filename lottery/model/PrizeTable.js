"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrizeTable {
    constructor(name, prizes, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.prizes = prizes;
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
        if (this.prizes != null) {
            properties["prizes"] = this.prizes.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = PrizeTable;
//# sourceMappingURL=PrizeTable.js.map