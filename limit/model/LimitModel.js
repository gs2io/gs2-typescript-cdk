"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LimitModelResetType_1 = require("./enums/LimitModelResetType");
class LimitModel {
    constructor(name, resetType, options = null) {
        var _a, _b, _c, _d, _e, _f;
        this.metadata = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
        this.anchorTimestamp = null;
        this.days = null;
        this.name = name;
        this.resetType = resetType;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.resetDayOfMonth = (_b = options === null || options === void 0 ? void 0 : options.resetDayOfMonth) !== null && _b !== void 0 ? _b : null;
        this.resetDayOfWeek = (_c = options === null || options === void 0 ? void 0 : options.resetDayOfWeek) !== null && _c !== void 0 ? _c : null;
        this.resetHour = (_d = options === null || options === void 0 ? void 0 : options.resetHour) !== null && _d !== void 0 ? _d : null;
        this.anchorTimestamp = (_e = options === null || options === void 0 ? void 0 : options.anchorTimestamp) !== null && _e !== void 0 ? _e : null;
        this.days = (_f = options === null || options === void 0 ? void 0 : options.days) !== null && _f !== void 0 ? _f : null;
    }
    static resetTypeIsNotReset(name, options = null) {
        return new LimitModel(name, LimitModelResetType_1.LimitModelResetType.NOT_RESET, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
        });
    }
    static resetTypeIsDaily(name, resetHour, options = null) {
        return new LimitModel(name, LimitModelResetType_1.LimitModelResetType.DAILY, {
            resetHour: resetHour,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
        });
    }
    static resetTypeIsWeekly(name, resetDayOfWeek, resetHour, options = null) {
        return new LimitModel(name, LimitModelResetType_1.LimitModelResetType.WEEKLY, {
            resetDayOfWeek: resetDayOfWeek,
            resetHour: resetHour,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
        });
    }
    static resetTypeIsMonthly(name, resetDayOfMonth, resetHour, options = null) {
        return new LimitModel(name, LimitModelResetType_1.LimitModelResetType.MONTHLY, {
            resetDayOfMonth: resetDayOfMonth,
            resetHour: resetHour,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
        });
    }
    static resetTypeIsDays(name, anchorTimestamp, days, options = null) {
        return new LimitModel(name, LimitModelResetType_1.LimitModelResetType.DAYS, {
            anchorTimestamp: anchorTimestamp,
            days: days,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
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
        if (this.anchorTimestamp != null) {
            properties["anchorTimestamp"] = this.anchorTimestamp;
        }
        if (this.days != null) {
            properties["days"] = this.days;
        }
        return properties;
    }
}
exports.default = LimitModel;
//# sourceMappingURL=LimitModel.js.map