"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuestModel {
    constructor(name, contents, options = null) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.metadata = null;
        this.challengePeriodEventId = null;
        this.firstCompleteAcquireActions = null;
        this.verifyActions = null;
        this.consumeActions = null;
        this.failedAcquireActions = null;
        this.premiseQuestNames = null;
        this.name = name;
        this.contents = contents;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.challengePeriodEventId = (_b = options === null || options === void 0 ? void 0 : options.challengePeriodEventId) !== null && _b !== void 0 ? _b : null;
        this.firstCompleteAcquireActions = (_c = options === null || options === void 0 ? void 0 : options.firstCompleteAcquireActions) !== null && _c !== void 0 ? _c : null;
        this.verifyActions = (_d = options === null || options === void 0 ? void 0 : options.verifyActions) !== null && _d !== void 0 ? _d : null;
        this.consumeActions = (_e = options === null || options === void 0 ? void 0 : options.consumeActions) !== null && _e !== void 0 ? _e : null;
        this.failedAcquireActions = (_f = options === null || options === void 0 ? void 0 : options.failedAcquireActions) !== null && _f !== void 0 ? _f : null;
        this.premiseQuestNames = (_g = options === null || options === void 0 ? void 0 : options.premiseQuestNames) !== null && _g !== void 0 ? _g : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.contents != null) {
            properties["contents"] = this.contents.map(v => v.properties());
        }
        if (this.challengePeriodEventId != null) {
            properties["challengePeriodEventId"] = this.challengePeriodEventId;
        }
        if (this.firstCompleteAcquireActions != null) {
            properties["firstCompleteAcquireActions"] = this.firstCompleteAcquireActions.map(v => v.properties());
        }
        if (this.verifyActions != null) {
            properties["verifyActions"] = this.verifyActions.map(v => v.properties());
        }
        if (this.consumeActions != null) {
            properties["consumeActions"] = this.consumeActions.map(v => v.properties());
        }
        if (this.failedAcquireActions != null) {
            properties["failedAcquireActions"] = this.failedAcquireActions.map(v => v.properties());
        }
        if (this.premiseQuestNames != null) {
            properties["premiseQuestNames"] = this.premiseQuestNames;
        }
        return properties;
    }
}
exports.default = QuestModel;
//# sourceMappingURL=QuestModel.js.map