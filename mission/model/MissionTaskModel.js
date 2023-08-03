"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MissionTaskModel {
    constructor(name, counterName, targetValue, options = null) {
        var _a, _b, _c, _d, _e;
        this.metadata = null;
        this.targetResetType = null;
        this.completeAcquireActions = null;
        this.challengePeriodEventId = null;
        this.premiseMissionTaskName = null;
        this.name = name;
        this.counterName = counterName;
        this.targetValue = targetValue;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.targetResetType = (_b = options === null || options === void 0 ? void 0 : options.targetResetType) !== null && _b !== void 0 ? _b : null;
        this.completeAcquireActions = (_c = options === null || options === void 0 ? void 0 : options.completeAcquireActions) !== null && _c !== void 0 ? _c : null;
        this.challengePeriodEventId = (_d = options === null || options === void 0 ? void 0 : options.challengePeriodEventId) !== null && _d !== void 0 ? _d : null;
        this.premiseMissionTaskName = (_e = options === null || options === void 0 ? void 0 : options.premiseMissionTaskName) !== null && _e !== void 0 ? _e : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.counterName != null) {
            properties["counterName"] = this.counterName;
        }
        if (this.targetResetType != null) {
            properties["targetResetType"] = this.targetResetType;
        }
        if (this.targetValue != null) {
            properties["targetValue"] = this.targetValue;
        }
        if (this.completeAcquireActions != null) {
            properties["completeAcquireActions"] = this.completeAcquireActions.map(v => v.properties());
        }
        if (this.challengePeriodEventId != null) {
            properties["challengePeriodEventId"] = this.challengePeriodEventId;
        }
        if (this.premiseMissionTaskName != null) {
            properties["premiseMissionTaskName"] = this.premiseMissionTaskName;
        }
        return properties;
    }
}
exports.default = MissionTaskModel;
//# sourceMappingURL=MissionTaskModel.js.map