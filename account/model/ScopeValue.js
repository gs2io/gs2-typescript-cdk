"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScopeValue {
    constructor(key, options = null) {
        var _a;
        this.value = null;
        this.key = key;
        this.value = (_a = options === null || options === void 0 ? void 0 : options.value) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.key != null) {
            properties["key"] = this.key;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }
        return properties;
    }
}
exports.default = ScopeValue;
//# sourceMappingURL=ScopeValue.js.map