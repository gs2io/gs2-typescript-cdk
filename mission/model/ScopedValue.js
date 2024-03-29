"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScopedValue {
    constructor(resetType, value, options = null) {
        var _a;
        this.nextResetAt = null;
        this.resetType = resetType;
        this.value = value;
        this.nextResetAt = (_a = options === null || options === void 0 ? void 0 : options.nextResetAt) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.resetType != null) {
            properties["resetType"] = this.resetType;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }
        if (this.nextResetAt != null) {
            properties["nextResetAt"] = this.nextResetAt;
        }
        return properties;
    }
}
exports.default = ScopedValue;
//# sourceMappingURL=ScopedValue.js.map