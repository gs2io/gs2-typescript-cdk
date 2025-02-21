"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TargetCounterModelScopeType_1 = require("./enums/TargetCounterModelScopeType");
class TargetCounterModel {
    constructor(counterName, scopeType, value, options = null) {
        var _a, _b;
        this.resetType = null;
        this.conditionName = null;
        this.counterName = counterName;
        this.scopeType = scopeType;
        this.value = value;
        this.resetType = (_a = options === null || options === void 0 ? void 0 : options.resetType) !== null && _a !== void 0 ? _a : null;
        this.conditionName = (_b = options === null || options === void 0 ? void 0 : options.conditionName) !== null && _b !== void 0 ? _b : null;
    }
    static scopeTypeIsResetTiming(counterName, value, options = null) {
        return new TargetCounterModel(counterName, TargetCounterModelScopeType_1.TargetCounterModelScopeType.RESET_TIMING, value, {
            resetType: options === null || options === void 0 ? void 0 : options.resetType,
        });
    }
    static scopeTypeIsVerifyAction(counterName, value, conditionName, options = null) {
        return new TargetCounterModel(counterName, TargetCounterModelScopeType_1.TargetCounterModelScopeType.VERIFY_ACTION, value, {
            conditionName: conditionName,
            resetType: options === null || options === void 0 ? void 0 : options.resetType,
        });
    }
    properties() {
        let properties = {};
        if (this.counterName != null) {
            properties["counterName"] = this.counterName;
        }
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
        return properties;
    }
}
exports.default = TargetCounterModel;
//# sourceMappingURL=TargetCounterModel.js.map