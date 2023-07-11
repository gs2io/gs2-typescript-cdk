"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CategoryModel {
    constructor(name, rewardIntervalMinutes, defaultMaximumIdleMinutes, acquireActions, options = null) {
        var _a, _b, _c;
        this.metadata = null;
        this.idlePeriodScheduleId = null;
        this.receivePeriodScheduleId = null;
        this.name = name;
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        this.acquireActions = acquireActions;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.idlePeriodScheduleId = (_b = options === null || options === void 0 ? void 0 : options.idlePeriodScheduleId) !== null && _b !== void 0 ? _b : null;
        this.receivePeriodScheduleId = (_c = options === null || options === void 0 ? void 0 : options.receivePeriodScheduleId) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.rewardIntervalMinutes != null) {
            properties["rewardIntervalMinutes"] = this.rewardIntervalMinutes;
        }
        if (this.defaultMaximumIdleMinutes != null) {
            properties["defaultMaximumIdleMinutes"] = this.defaultMaximumIdleMinutes;
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties());
        }
        if (this.idlePeriodScheduleId != null) {
            properties["idlePeriodScheduleId"] = this.idlePeriodScheduleId;
        }
        if (this.receivePeriodScheduleId != null) {
            properties["receivePeriodScheduleId"] = this.receivePeriodScheduleId;
        }
        return properties;
    }
}
exports.default = CategoryModel;
//# sourceMappingURL=CategoryModel.js.map