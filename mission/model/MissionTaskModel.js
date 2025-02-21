"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MissionTaskModelVerifyCompleteType_1 = require("./enums/MissionTaskModelVerifyCompleteType");
class MissionTaskModel {
    constructor(name, verifyCompleteType, options = null) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.metadata = null;
        this.targetCounter = null;
        this.verifyCompleteConsumeActions = null;
        this.completeAcquireActions = null;
        this.challengePeriodEventId = null;
        this.premiseMissionTaskName = null;
        this.targetResetType = null;
        this.name = name;
        this.verifyCompleteType = verifyCompleteType;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.targetCounter = (_b = options === null || options === void 0 ? void 0 : options.targetCounter) !== null && _b !== void 0 ? _b : null;
        this.verifyCompleteConsumeActions = (_c = options === null || options === void 0 ? void 0 : options.verifyCompleteConsumeActions) !== null && _c !== void 0 ? _c : null;
        this.completeAcquireActions = (_d = options === null || options === void 0 ? void 0 : options.completeAcquireActions) !== null && _d !== void 0 ? _d : null;
        this.challengePeriodEventId = (_e = options === null || options === void 0 ? void 0 : options.challengePeriodEventId) !== null && _e !== void 0 ? _e : null;
        this.premiseMissionTaskName = (_f = options === null || options === void 0 ? void 0 : options.premiseMissionTaskName) !== null && _f !== void 0 ? _f : null;
        this.targetResetType = (_g = options === null || options === void 0 ? void 0 : options.targetResetType) !== null && _g !== void 0 ? _g : null;
    }
    static verifyCompleteTypeIsCounter(name, counterName, targetValue, targetCounter, options = null) {
        return new MissionTaskModel(name, MissionTaskModelVerifyCompleteType_1.MissionTaskModelVerifyCompleteType.COUNTER, {
            targetCounter: targetCounter,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            verifyCompleteConsumeActions: options === null || options === void 0 ? void 0 : options.verifyCompleteConsumeActions,
            completeAcquireActions: options === null || options === void 0 ? void 0 : options.completeAcquireActions,
            challengePeriodEventId: options === null || options === void 0 ? void 0 : options.challengePeriodEventId,
            premiseMissionTaskName: options === null || options === void 0 ? void 0 : options.premiseMissionTaskName,
            targetResetType: options === null || options === void 0 ? void 0 : options.targetResetType,
        });
    }
    static verifyCompleteTypeIsVerifyActions(name, counterName, targetValue, options = null) {
        return new MissionTaskModel(name, MissionTaskModelVerifyCompleteType_1.MissionTaskModelVerifyCompleteType.VERIFY_ACTIONS, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            verifyCompleteConsumeActions: options === null || options === void 0 ? void 0 : options.verifyCompleteConsumeActions,
            completeAcquireActions: options === null || options === void 0 ? void 0 : options.completeAcquireActions,
            challengePeriodEventId: options === null || options === void 0 ? void 0 : options.challengePeriodEventId,
            premiseMissionTaskName: options === null || options === void 0 ? void 0 : options.premiseMissionTaskName,
            targetResetType: options === null || options === void 0 ? void 0 : options.targetResetType,
        });
    }
    properties() {
        var _a;
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.verifyCompleteType != null) {
            properties["verifyCompleteType"] = this.verifyCompleteType;
        }
        if (this.targetCounter != null) {
            properties["targetCounter"] = (_a = this.targetCounter) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.verifyCompleteConsumeActions != null) {
            properties["verifyCompleteConsumeActions"] = this.verifyCompleteConsumeActions.map(v => v.properties());
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
        if (this.targetResetType != null) {
            properties["targetResetType"] = this.targetResetType;
        }
        return properties;
    }
}
exports.default = MissionTaskModel;
//# sourceMappingURL=MissionTaskModel.js.map