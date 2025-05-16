"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CounterScopeModelScopeType_1 = require("./enums/CounterScopeModelScopeType");
const CounterScopeModelResetType_1 = require("./enums/CounterScopeModelResetType");
class CounterScopeModel {
    constructor(scopeType, resetType, options = null) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
        this.conditionName = null;
        this.condition = null;
        this.anchorTimestamp = null;
        this.days = null;
        this.scopeType = scopeType;
        this.resetType = resetType;
        this.resetDayOfMonth = (_a = options === null || options === void 0 ? void 0 : options.resetDayOfMonth) !== null && _a !== void 0 ? _a : null;
        this.resetDayOfWeek = (_b = options === null || options === void 0 ? void 0 : options.resetDayOfWeek) !== null && _b !== void 0 ? _b : null;
        this.resetHour = (_c = options === null || options === void 0 ? void 0 : options.resetHour) !== null && _c !== void 0 ? _c : null;
        this.conditionName = (_d = options === null || options === void 0 ? void 0 : options.conditionName) !== null && _d !== void 0 ? _d : null;
        this.condition = (_e = options === null || options === void 0 ? void 0 : options.condition) !== null && _e !== void 0 ? _e : null;
        this.anchorTimestamp = (_f = options === null || options === void 0 ? void 0 : options.anchorTimestamp) !== null && _f !== void 0 ? _f : null;
        this.days = (_g = options === null || options === void 0 ? void 0 : options.days) !== null && _g !== void 0 ? _g : null;
    }
    static resetTypeIsNotReset(scopeType, options = null) {
        return new CounterScopeModel(scopeType, CounterScopeModelResetType_1.CounterScopeModelResetType.NOT_RESET, {});
    }
    static resetTypeIsDaily(scopeType, resetHour, options = null) {
        return new CounterScopeModel(scopeType, CounterScopeModelResetType_1.CounterScopeModelResetType.DAILY, {
            resetHour: resetHour,
        });
    }
    static resetTypeIsWeekly(scopeType, resetDayOfWeek, resetHour, options = null) {
        return new CounterScopeModel(scopeType, CounterScopeModelResetType_1.CounterScopeModelResetType.WEEKLY, {
            resetDayOfWeek: resetDayOfWeek,
            resetHour: resetHour,
        });
    }
    static resetTypeIsMonthly(scopeType, resetDayOfMonth, resetHour, options = null) {
        return new CounterScopeModel(scopeType, CounterScopeModelResetType_1.CounterScopeModelResetType.MONTHLY, {
            resetDayOfMonth: resetDayOfMonth,
            resetHour: resetHour,
        });
    }
    static resetTypeIsDays(scopeType, anchorTimestamp, days, options = null) {
        return new CounterScopeModel(scopeType, CounterScopeModelResetType_1.CounterScopeModelResetType.DAYS, {
            anchorTimestamp: anchorTimestamp,
            days: days,
        });
    }
    static scopeTypeIsResetTiming(resetType, options = null) {
        return new CounterScopeModel(CounterScopeModelScopeType_1.CounterScopeModelScopeType.RESET_TIMING, resetType, {});
    }
    static scopeTypeIsVerifyAction(resetType, conditionName, condition, options = null) {
        return new CounterScopeModel(CounterScopeModelScopeType_1.CounterScopeModelScopeType.VERIFY_ACTION, resetType, {
            conditionName: conditionName,
            condition: condition,
        });
    }
    properties() {
        var _a;
        let properties = {};
        if (this.scopeType != null) {
            properties["scopeType"] = this.scopeType;
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
        if (this.conditionName != null) {
            properties["conditionName"] = this.conditionName;
        }
        if (this.condition != null) {
            properties["condition"] = (_a = this.condition) === null || _a === void 0 ? void 0 : _a.properties();
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
exports.default = CounterScopeModel;
//# sourceMappingURL=CounterScopeModel.js.map