"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CounterScopeModelResetType_1 = require("./enum/CounterScopeModelResetType");
class CounterScopeModel {
    constructor(resetType, options = null) {
        var _a, _b, _c;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
        this.resetType = resetType;
        this.resetDayOfMonth = (_a = options === null || options === void 0 ? void 0 : options.resetDayOfMonth) !== null && _a !== void 0 ? _a : null;
        this.resetDayOfWeek = (_b = options === null || options === void 0 ? void 0 : options.resetDayOfWeek) !== null && _b !== void 0 ? _b : null;
        this.resetHour = (_c = options === null || options === void 0 ? void 0 : options.resetHour) !== null && _c !== void 0 ? _c : null;
    }
    static resetTypeIsNotReset(options = null) {
        return new CounterScopeModel(CounterScopeModelResetType_1.CounterScopeModelResetType.NOT_RESET, {});
    }
    static resetTypeIsDaily(resetHour, options = null) {
        return new CounterScopeModel(CounterScopeModelResetType_1.CounterScopeModelResetType.DAILY, {
            resetHour: resetHour,
        });
    }
    static resetTypeIsWeekly(resetDayOfWeek, resetHour, options = null) {
        return new CounterScopeModel(CounterScopeModelResetType_1.CounterScopeModelResetType.WEEKLY, {
            resetDayOfWeek: resetDayOfWeek,
            resetHour: resetHour,
        });
    }
    static resetTypeIsMonthly(resetDayOfMonth, resetHour, options = null) {
        return new CounterScopeModel(CounterScopeModelResetType_1.CounterScopeModelResetType.MONTHLY, {
            resetDayOfMonth: resetDayOfMonth,
            resetHour: resetHour,
        });
    }
    properties() {
        let properties = {};
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
        return properties;
    }
}
exports.default = CounterScopeModel;
//# sourceMappingURL=CounterScopeModel.js.map