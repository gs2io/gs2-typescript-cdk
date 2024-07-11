"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RepeatSettingRepeatType_1 = require("./enum/RepeatSettingRepeatType");
class RepeatSetting {
    constructor(repeatType, options = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.beginDayOfMonth = null;
        this.endDayOfMonth = null;
        this.beginDayOfWeek = null;
        this.endDayOfWeek = null;
        this.beginHour = null;
        this.endHour = null;
        this.anchorTimestamp = null;
        this.activeDays = null;
        this.inactiveDays = null;
        this.repeatType = repeatType;
        this.beginDayOfMonth = (_a = options === null || options === void 0 ? void 0 : options.beginDayOfMonth) !== null && _a !== void 0 ? _a : null;
        this.endDayOfMonth = (_b = options === null || options === void 0 ? void 0 : options.endDayOfMonth) !== null && _b !== void 0 ? _b : null;
        this.beginDayOfWeek = (_c = options === null || options === void 0 ? void 0 : options.beginDayOfWeek) !== null && _c !== void 0 ? _c : null;
        this.endDayOfWeek = (_d = options === null || options === void 0 ? void 0 : options.endDayOfWeek) !== null && _d !== void 0 ? _d : null;
        this.beginHour = (_e = options === null || options === void 0 ? void 0 : options.beginHour) !== null && _e !== void 0 ? _e : null;
        this.endHour = (_f = options === null || options === void 0 ? void 0 : options.endHour) !== null && _f !== void 0 ? _f : null;
        this.anchorTimestamp = (_g = options === null || options === void 0 ? void 0 : options.anchorTimestamp) !== null && _g !== void 0 ? _g : null;
        this.activeDays = (_h = options === null || options === void 0 ? void 0 : options.activeDays) !== null && _h !== void 0 ? _h : null;
        this.inactiveDays = (_j = options === null || options === void 0 ? void 0 : options.inactiveDays) !== null && _j !== void 0 ? _j : null;
    }
    static repeatTypeIsAlways(options = null) {
        return new RepeatSetting(RepeatSettingRepeatType_1.RepeatSettingRepeatType.ALWAYS, {});
    }
    static repeatTypeIsDaily(beginHour, endHour, options = null) {
        return new RepeatSetting(RepeatSettingRepeatType_1.RepeatSettingRepeatType.DAILY, {
            beginHour: beginHour,
            endHour: endHour,
        });
    }
    static repeatTypeIsWeekly(beginDayOfWeek, endDayOfWeek, beginHour, endHour, options = null) {
        return new RepeatSetting(RepeatSettingRepeatType_1.RepeatSettingRepeatType.WEEKLY, {
            beginDayOfWeek: beginDayOfWeek,
            endDayOfWeek: endDayOfWeek,
            beginHour: beginHour,
            endHour: endHour,
        });
    }
    static repeatTypeIsMonthly(beginDayOfMonth, endDayOfMonth, beginHour, endHour, options = null) {
        return new RepeatSetting(RepeatSettingRepeatType_1.RepeatSettingRepeatType.MONTHLY, {
            beginDayOfMonth: beginDayOfMonth,
            endDayOfMonth: endDayOfMonth,
            beginHour: beginHour,
            endHour: endHour,
        });
    }
    static repeatTypeIsCustom(anchorTimestamp, activeDays, inactiveDays, options = null) {
        return new RepeatSetting(RepeatSettingRepeatType_1.RepeatSettingRepeatType.CUSTOM, {
            anchorTimestamp: anchorTimestamp,
            activeDays: activeDays,
            inactiveDays: inactiveDays,
        });
    }
    properties() {
        let properties = {};
        if (this.repeatType != null) {
            properties["repeatType"] = this.repeatType;
        }
        if (this.beginDayOfMonth != null) {
            properties["beginDayOfMonth"] = this.beginDayOfMonth;
        }
        if (this.endDayOfMonth != null) {
            properties["endDayOfMonth"] = this.endDayOfMonth;
        }
        if (this.beginDayOfWeek != null) {
            properties["beginDayOfWeek"] = this.beginDayOfWeek;
        }
        if (this.endDayOfWeek != null) {
            properties["endDayOfWeek"] = this.endDayOfWeek;
        }
        if (this.beginHour != null) {
            properties["beginHour"] = this.beginHour;
        }
        if (this.endHour != null) {
            properties["endHour"] = this.endHour;
        }
        if (this.anchorTimestamp != null) {
            properties["anchorTimestamp"] = this.anchorTimestamp;
        }
        if (this.activeDays != null) {
            properties["activeDays"] = this.activeDays;
        }
        if (this.inactiveDays != null) {
            properties["inactiveDays"] = this.inactiveDays;
        }
        return properties;
    }
}
exports.default = RepeatSetting;
//# sourceMappingURL=RepeatSetting.js.map