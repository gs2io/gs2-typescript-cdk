"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CounterScopeModelScopeType_1 = require("./enum/CounterScopeModelScopeType");
class CounterScopeModel {
    constructor(scopeType, options = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.resetType = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
        this.conditionName = null;
        this.condition = null;
        this.anchorTimestamp = null;
        this.days = null;
        this.scopeType = scopeType;
        this.resetType = (_a = options === null || options === void 0 ? void 0 : options.resetType) !== null && _a !== void 0 ? _a : null;
        this.resetDayOfMonth = (_b = options === null || options === void 0 ? void 0 : options.resetDayOfMonth) !== null && _b !== void 0 ? _b : null;
        this.resetDayOfWeek = (_c = options === null || options === void 0 ? void 0 : options.resetDayOfWeek) !== null && _c !== void 0 ? _c : null;
        this.resetHour = (_d = options === null || options === void 0 ? void 0 : options.resetHour) !== null && _d !== void 0 ? _d : null;
        this.conditionName = (_e = options === null || options === void 0 ? void 0 : options.conditionName) !== null && _e !== void 0 ? _e : null;
        this.condition = (_f = options === null || options === void 0 ? void 0 : options.condition) !== null && _f !== void 0 ? _f : null;
        this.anchorTimestamp = (_g = options === null || options === void 0 ? void 0 : options.anchorTimestamp) !== null && _g !== void 0 ? _g : null;
        this.days = (_h = options === null || options === void 0 ? void 0 : options.days) !== null && _h !== void 0 ? _h : null;
    }
    static scopeTypeIsResetTiming(resetType, options = null) {
        return new CounterScopeModel(CounterScopeModelScopeType_1.CounterScopeModelScopeType.RESET_TIMING, {
            resetType: resetType,
        });
    }
    static scopeTypeIsVerifyAction(conditionName, condition, options = null) {
        return new CounterScopeModel(CounterScopeModelScopeType_1.CounterScopeModelScopeType.VERIFY_ACTION, {
            conditionName: conditionName,
            condition: condition,
        });
    }
    static resetTypeIsNotReset(scopeType, options = null) {
        return new CounterScopeModel(scopeType, {});
    }
    static resetTypeIsDaily(scopeType, resetHour, options = null) {
        return new CounterScopeModel(scopeType, {
            resetHour: resetHour,
        });
    }
    static resetTypeIsWeekly(scopeType, resetDayOfWeek, resetHour, options = null) {
        return new CounterScopeModel(scopeType, {
            resetDayOfWeek: resetDayOfWeek,
            resetHour: resetHour,
        });
    }
    static resetTypeIsMonthly(scopeType, resetDayOfMonth, resetHour, options = null) {
        return new CounterScopeModel(scopeType, {
            resetDayOfMonth: resetDayOfMonth,
            resetHour: resetHour,
        });
    }
    static resetTypeIsDays(scopeType, anchorTimestamp, days, options = null) {
        return new CounterScopeModel(scopeType, {
            anchorTimestamp: anchorTimestamp,
            days: days,
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