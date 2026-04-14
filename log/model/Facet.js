"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Facet {
    constructor(field, options = null) {
        var _a, _b, _c;
        this.values = null;
        this.range = null;
        this.globalRange = null;
        this.field = field;
        this.values = (_a = options === null || options === void 0 ? void 0 : options.values) !== null && _a !== void 0 ? _a : null;
        this.range = (_b = options === null || options === void 0 ? void 0 : options.range) !== null && _b !== void 0 ? _b : null;
        this.globalRange = (_c = options === null || options === void 0 ? void 0 : options.globalRange) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        var _a, _b;
        let properties = {};
        if (this.field != null) {
            properties["field"] = this.field;
        }
        if (this.values != null) {
            properties["values"] = this.values.map(v => v.properties());
        }
        if (this.range != null) {
            properties["range"] = (_a = this.range) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.globalRange != null) {
            properties["globalRange"] = (_b = this.globalRange) === null || _b === void 0 ? void 0 : _b.properties();
        }
        return properties;
    }
}
exports.default = Facet;
//# sourceMappingURL=Facet.js.map