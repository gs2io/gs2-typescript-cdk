"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BonusModelMode_1 = require("./enums/BonusModelMode");
const BonusModelMissedReceiveRelief_1 = require("./enums/BonusModelMissedReceiveRelief");
class BonusModel {
    constructor(name, mode, missedReceiveRelief, options = null) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.metadata = null;
        this.periodEventId = null;
        this.resetHour = null;
        this.repeat = null;
        this.rewards = null;
        this.missedReceiveReliefVerifyActions = null;
        this.missedReceiveReliefConsumeActions = null;
        this.name = name;
        this.mode = mode;
        this.missedReceiveRelief = missedReceiveRelief;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.periodEventId = (_b = options === null || options === void 0 ? void 0 : options.periodEventId) !== null && _b !== void 0 ? _b : null;
        this.resetHour = (_c = options === null || options === void 0 ? void 0 : options.resetHour) !== null && _c !== void 0 ? _c : null;
        this.repeat = (_d = options === null || options === void 0 ? void 0 : options.repeat) !== null && _d !== void 0 ? _d : null;
        this.rewards = (_e = options === null || options === void 0 ? void 0 : options.rewards) !== null && _e !== void 0 ? _e : null;
        this.missedReceiveReliefVerifyActions = (_f = options === null || options === void 0 ? void 0 : options.missedReceiveReliefVerifyActions) !== null && _f !== void 0 ? _f : null;
        this.missedReceiveReliefConsumeActions = (_g = options === null || options === void 0 ? void 0 : options.missedReceiveReliefConsumeActions) !== null && _g !== void 0 ? _g : null;
    }
    static modeIsSchedule(name, missedReceiveRelief, options = null) {
        return new BonusModel(name, BonusModelMode_1.BonusModelMode.SCHEDULE, missedReceiveRelief, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            periodEventId: options === null || options === void 0 ? void 0 : options.periodEventId,
            rewards: options === null || options === void 0 ? void 0 : options.rewards,
            missedReceiveReliefVerifyActions: options === null || options === void 0 ? void 0 : options.missedReceiveReliefVerifyActions,
            missedReceiveReliefConsumeActions: options === null || options === void 0 ? void 0 : options.missedReceiveReliefConsumeActions,
        });
    }
    static modeIsStreaming(name, missedReceiveRelief, repeat, options = null) {
        return new BonusModel(name, BonusModelMode_1.BonusModelMode.STREAMING, missedReceiveRelief, {
            repeat: repeat,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            periodEventId: options === null || options === void 0 ? void 0 : options.periodEventId,
            rewards: options === null || options === void 0 ? void 0 : options.rewards,
            missedReceiveReliefVerifyActions: options === null || options === void 0 ? void 0 : options.missedReceiveReliefVerifyActions,
            missedReceiveReliefConsumeActions: options === null || options === void 0 ? void 0 : options.missedReceiveReliefConsumeActions,
        });
    }
    static missedReceiveReliefIsEnabled(name, mode, options = null) {
        return new BonusModel(name, mode, BonusModelMissedReceiveRelief_1.BonusModelMissedReceiveRelief.ENABLED, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            periodEventId: options === null || options === void 0 ? void 0 : options.periodEventId,
            rewards: options === null || options === void 0 ? void 0 : options.rewards,
            missedReceiveReliefVerifyActions: options === null || options === void 0 ? void 0 : options.missedReceiveReliefVerifyActions,
            missedReceiveReliefConsumeActions: options === null || options === void 0 ? void 0 : options.missedReceiveReliefConsumeActions,
        });
    }
    static missedReceiveReliefIsDisabled(name, mode, options = null) {
        return new BonusModel(name, mode, BonusModelMissedReceiveRelief_1.BonusModelMissedReceiveRelief.DISABLED, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            periodEventId: options === null || options === void 0 ? void 0 : options.periodEventId,
            rewards: options === null || options === void 0 ? void 0 : options.rewards,
            missedReceiveReliefVerifyActions: options === null || options === void 0 ? void 0 : options.missedReceiveReliefVerifyActions,
            missedReceiveReliefConsumeActions: options === null || options === void 0 ? void 0 : options.missedReceiveReliefConsumeActions,
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
        if (this.mode != null) {
            properties["mode"] = this.mode;
        }
        if (this.periodEventId != null) {
            properties["periodEventId"] = this.periodEventId;
        }
        if (this.resetHour != null) {
            properties["resetHour"] = this.resetHour;
        }
        if (this.repeat != null) {
            properties["repeat"] = this.repeat;
        }
        if (this.rewards != null) {
            properties["rewards"] = this.rewards.map(v => v.properties());
        }
        if (this.missedReceiveRelief != null) {
            properties["missedReceiveRelief"] = this.missedReceiveRelief;
        }
        if (this.missedReceiveReliefVerifyActions != null) {
            properties["missedReceiveReliefVerifyActions"] = this.missedReceiveReliefVerifyActions.map(v => v.properties());
        }
        if (this.missedReceiveReliefConsumeActions != null) {
            properties["missedReceiveReliefConsumeActions"] = this.missedReceiveReliefConsumeActions.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = BonusModel;
//# sourceMappingURL=BonusModel.js.map