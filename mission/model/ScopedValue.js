"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ScopedValueScopeType_1 = require("./enum/ScopedValueScopeType");
class ScopedValue {
    constructor(scopeType, value, options = null) {
        var _a, _b, _c;
        this.resetType = null;
        this.conditionName = null;
        this.nextResetAt = null;
        this.scopeType = scopeType;
        this.value = value;
        this.resetType = (_a = options === null || options === void 0 ? void 0 : options.resetType) !== null && _a !== void 0 ? _a : null;
        this.conditionName = (_b = options === null || options === void 0 ? void 0 : options.conditionName) !== null && _b !== void 0 ? _b : null;
        this.nextResetAt = (_c = options === null || options === void 0 ? void 0 : options.nextResetAt) !== null && _c !== void 0 ? _c : null;
    }
    static scopeTypeIsResetTiming(value, resetType, options = null) {
        return new ScopedValue(ScopedValueScopeType_1.ScopedValueScopeType.RESET_TIMING, value, {
            resetType: resetType,
            nextResetAt: options === null || options === void 0 ? void 0 : options.nextResetAt,
        });
    }
    static scopeTypeIsVerifyAction(value, conditionName, options = null) {
        return new ScopedValue(ScopedValueScopeType_1.ScopedValueScopeType.VERIFY_ACTION, value, {
            conditionName: conditionName,
        });
    }
    properties() {
        let properties = {};
        if (this.scopeType != null) {
            properties["scopeType"] = this.scopeType;
        }
        if (this.resetType != null) {
            properties["resetType"] = this.resetType;
        }
        if (this.conditionName != null) {
            properties["conditionName"] = this.conditionName;
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