"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TargetCounterModel {
    constructor(counterName, value, options = null) {
        var _a;
        this.resetType = null;
        this.counterName = counterName;
        this.value = value;
        this.resetType = (_a = options === null || options === void 0 ? void 0 : options.resetType) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.counterName != null) {
            properties["counterName"] = this.counterName;
        }
        if (this.resetType != null) {
            properties["resetType"] = this.resetType;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }
        return properties;
    }
}
exports.default = TargetCounterModel;
//# sourceMappingURL=TargetCounterModel.js.map