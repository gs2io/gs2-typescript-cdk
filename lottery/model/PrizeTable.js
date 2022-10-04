"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PrizeTableRef_1 = tslib_1.__importDefault(require("../ref/PrizeTableRef"));
class PrizeTable {
    constructor(name, prizes, options) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.prizes = prizes;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.prizes != null) {
            properties["Prizes"] = this.prizes.map(v => v.properties());
        }
        return properties;
    }
    ref(namespaceName) {
        return new PrizeTableRef_1.default(namespaceName, this.name);
    }
}
exports.default = PrizeTable;
//# sourceMappingURL=PrizeTable.js.map