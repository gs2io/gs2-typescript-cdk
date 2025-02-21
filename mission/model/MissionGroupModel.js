"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MissionGroupModelResetType_1 = require("./enums/MissionGroupModelResetType");
class MissionGroupModel {
    constructor(name, resetType, options = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.metadata = null;
        this.tasks = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
        this.completeNotificationNamespaceId = null;
        this.anchorTimestamp = null;
        this.days = null;
        this.name = name;
        this.resetType = resetType;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.tasks = (_b = options === null || options === void 0 ? void 0 : options.tasks) !== null && _b !== void 0 ? _b : null;
        this.resetDayOfMonth = (_c = options === null || options === void 0 ? void 0 : options.resetDayOfMonth) !== null && _c !== void 0 ? _c : null;
        this.resetDayOfWeek = (_d = options === null || options === void 0 ? void 0 : options.resetDayOfWeek) !== null && _d !== void 0 ? _d : null;
        this.resetHour = (_e = options === null || options === void 0 ? void 0 : options.resetHour) !== null && _e !== void 0 ? _e : null;
        this.completeNotificationNamespaceId = (_f = options === null || options === void 0 ? void 0 : options.completeNotificationNamespaceId) !== null && _f !== void 0 ? _f : null;
        this.anchorTimestamp = (_g = options === null || options === void 0 ? void 0 : options.anchorTimestamp) !== null && _g !== void 0 ? _g : null;
        this.days = (_h = options === null || options === void 0 ? void 0 : options.days) !== null && _h !== void 0 ? _h : null;
    }
    static resetTypeIsNotReset(name, options = null) {
        return new MissionGroupModel(name, MissionGroupModelResetType_1.MissionGroupModelResetType.NOT_RESET, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            tasks: options === null || options === void 0 ? void 0 : options.tasks,
            completeNotificationNamespaceId: options === null || options === void 0 ? void 0 : options.completeNotificationNamespaceId,
        });
    }
    static resetTypeIsDaily(name, resetHour, options = null) {
        return new MissionGroupModel(name, MissionGroupModelResetType_1.MissionGroupModelResetType.DAILY, {
            resetHour: resetHour,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            tasks: options === null || options === void 0 ? void 0 : options.tasks,
            completeNotificationNamespaceId: options === null || options === void 0 ? void 0 : options.completeNotificationNamespaceId,
        });
    }
    static resetTypeIsWeekly(name, resetDayOfWeek, resetHour, options = null) {
        return new MissionGroupModel(name, MissionGroupModelResetType_1.MissionGroupModelResetType.WEEKLY, {
            resetDayOfWeek: resetDayOfWeek,
            resetHour: resetHour,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            tasks: options === null || options === void 0 ? void 0 : options.tasks,
            completeNotificationNamespaceId: options === null || options === void 0 ? void 0 : options.completeNotificationNamespaceId,
        });
    }
    static resetTypeIsMonthly(name, resetDayOfMonth, resetHour, options = null) {
        return new MissionGroupModel(name, MissionGroupModelResetType_1.MissionGroupModelResetType.MONTHLY, {
            resetDayOfMonth: resetDayOfMonth,
            resetHour: resetHour,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            tasks: options === null || options === void 0 ? void 0 : options.tasks,
            completeNotificationNamespaceId: options === null || options === void 0 ? void 0 : options.completeNotificationNamespaceId,
        });
    }
    static resetTypeIsDays(name, anchorTimestamp, days, options = null) {
        return new MissionGroupModel(name, MissionGroupModelResetType_1.MissionGroupModelResetType.DAYS, {
            anchorTimestamp: anchorTimestamp,
            days: days,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            tasks: options === null || options === void 0 ? void 0 : options.tasks,
            completeNotificationNamespaceId: options === null || options === void 0 ? void 0 : options.completeNotificationNamespaceId,
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
        if (this.tasks != null) {
            properties["tasks"] = this.tasks.map(v => v.properties());
        }
        if (this.resetType != null) {
            properties["resetType"] = this.resetType;
        }
        if (this.resetDayOfMonth != null) {
            properties["resetDayOfMonth"] = this.resetDayOfMonth;
        }
        if (this.resetDayOfWeek != null) {
            properties["resetDayOfWeek"] = this.resetDayOfWeek;
        }
        if (this.resetHour != null) {
            properties["resetHour"] = this.resetHour;
        }
        if (this.completeNotificationNamespaceId != null) {
            properties["completeNotificationNamespaceId"] = this.completeNotificationNamespaceId;
        }
        if (this.anchorTimestamp != null) {
            properties["anchorTimestamp"] = this.anchorTimestamp;
        }
        if (this.days != null) {
            properties["days"] = this.days;
        }
        return properties;
    }
}
exports.default = MissionGroupModel;
//# sourceMappingURL=MissionGroupModel.js.map