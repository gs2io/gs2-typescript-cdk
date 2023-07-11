"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RateModelTimingType_1 = require("./enum/RateModelTimingType");
class RateModel {
    constructor(name, timingType, options = null) {
        var _a, _b, _c, _d, _e, _f;
        this.metadata = null;
        this.consumeActions = null;
        this.lockTime = null;
        this.enableSkip = null;
        this.skipConsumeActions = null;
        this.acquireActions = null;
        this.name = name;
        this.timingType = timingType;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.consumeActions = (_b = options === null || options === void 0 ? void 0 : options.consumeActions) !== null && _b !== void 0 ? _b : null;
        this.lockTime = (_c = options === null || options === void 0 ? void 0 : options.lockTime) !== null && _c !== void 0 ? _c : null;
        this.enableSkip = (_d = options === null || options === void 0 ? void 0 : options.enableSkip) !== null && _d !== void 0 ? _d : null;
        this.skipConsumeActions = (_e = options === null || options === void 0 ? void 0 : options.skipConsumeActions) !== null && _e !== void 0 ? _e : null;
        this.acquireActions = (_f = options === null || options === void 0 ? void 0 : options.acquireActions) !== null && _f !== void 0 ? _f : null;
    }
    static timingTypeIsImmediate(name, options = null) {
        return new RateModel(name, RateModelTimingType_1.RateModelTimingType.IMMEDIATE, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            consumeActions: options === null || options === void 0 ? void 0 : options.consumeActions,
            skipConsumeActions: options === null || options === void 0 ? void 0 : options.skipConsumeActions,
            acquireActions: options === null || options === void 0 ? void 0 : options.acquireActions,
        });
    }
    static timingTypeIsAwait(name, lockTime, enableSkip, options = null) {
        return new RateModel(name, RateModelTimingType_1.RateModelTimingType.AWAIT, {
            lockTime: lockTime,
            enableSkip: enableSkip,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            consumeActions: options === null || options === void 0 ? void 0 : options.consumeActions,
            skipConsumeActions: options === null || options === void 0 ? void 0 : options.skipConsumeActions,
            acquireActions: options === null || options === void 0 ? void 0 : options.acquireActions,
        });
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.consumeActions != null) {
            properties["consumeActions"] = this.consumeActions.map(v => v.properties());
        }
        if (this.timingType != null) {
            properties["timingType"] = this.timingType;
        }
        if (this.lockTime != null) {
            properties["lockTime"] = this.lockTime;
        }
        if (this.enableSkip != null) {
            properties["enableSkip"] = this.enableSkip;
        }
        if (this.skipConsumeActions != null) {
            properties["skipConsumeActions"] = this.skipConsumeActions.map(v => v.properties());
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = RateModel;
//# sourceMappingURL=RateModel.js.map