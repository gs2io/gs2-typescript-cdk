"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventScheduleType_1 = require("./enum/EventScheduleType");
const EventRepeatType_1 = require("./enum/EventRepeatType");
class Event {
    constructor(name, scheduleType, repeatSetting, repeatType, options = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.metadata = null;
        this.absoluteBegin = null;
        this.absoluteEnd = null;
        this.relativeTriggerName = null;
        this.repeatBeginDayOfMonth = null;
        this.repeatEndDayOfMonth = null;
        this.repeatBeginDayOfWeek = null;
        this.repeatEndDayOfWeek = null;
        this.repeatBeginHour = null;
        this.repeatEndHour = null;
        this.name = name;
        this.scheduleType = scheduleType;
        this.repeatSetting = repeatSetting;
        this.repeatType = repeatType;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.absoluteBegin = (_b = options === null || options === void 0 ? void 0 : options.absoluteBegin) !== null && _b !== void 0 ? _b : null;
        this.absoluteEnd = (_c = options === null || options === void 0 ? void 0 : options.absoluteEnd) !== null && _c !== void 0 ? _c : null;
        this.relativeTriggerName = (_d = options === null || options === void 0 ? void 0 : options.relativeTriggerName) !== null && _d !== void 0 ? _d : null;
        this.repeatBeginDayOfMonth = (_e = options === null || options === void 0 ? void 0 : options.repeatBeginDayOfMonth) !== null && _e !== void 0 ? _e : null;
        this.repeatEndDayOfMonth = (_f = options === null || options === void 0 ? void 0 : options.repeatEndDayOfMonth) !== null && _f !== void 0 ? _f : null;
        this.repeatBeginDayOfWeek = (_g = options === null || options === void 0 ? void 0 : options.repeatBeginDayOfWeek) !== null && _g !== void 0 ? _g : null;
        this.repeatEndDayOfWeek = (_h = options === null || options === void 0 ? void 0 : options.repeatEndDayOfWeek) !== null && _h !== void 0 ? _h : null;
        this.repeatBeginHour = (_j = options === null || options === void 0 ? void 0 : options.repeatBeginHour) !== null && _j !== void 0 ? _j : null;
        this.repeatEndHour = (_k = options === null || options === void 0 ? void 0 : options.repeatEndHour) !== null && _k !== void 0 ? _k : null;
    }
    static scheduleTypeIsAbsolute(name, repeatSetting, repeatType, options = null) {
        return new Event(name, EventScheduleType_1.EventScheduleType.ABSOLUTE, repeatSetting, repeatType, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            absoluteBegin: options === null || options === void 0 ? void 0 : options.absoluteBegin,
            absoluteEnd: options === null || options === void 0 ? void 0 : options.absoluteEnd,
        });
    }
    static scheduleTypeIsRelative(name, repeatSetting, repeatType, relativeTriggerName, options = null) {
        return new Event(name, EventScheduleType_1.EventScheduleType.RELATIVE, repeatSetting, repeatType, {
            relativeTriggerName: relativeTriggerName,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            absoluteBegin: options === null || options === void 0 ? void 0 : options.absoluteBegin,
            absoluteEnd: options === null || options === void 0 ? void 0 : options.absoluteEnd,
        });
    }
    static repeatTypeIsAlways(name, scheduleType, repeatSetting, options = null) {
        return new Event(name, scheduleType, repeatSetting, EventRepeatType_1.EventRepeatType.ALWAYS, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            absoluteBegin: options === null || options === void 0 ? void 0 : options.absoluteBegin,
            absoluteEnd: options === null || options === void 0 ? void 0 : options.absoluteEnd,
        });
    }
    static repeatTypeIsDaily(name, scheduleType, repeatSetting, repeatBeginHour, repeatEndHour, options = null) {
        return new Event(name, scheduleType, repeatSetting, EventRepeatType_1.EventRepeatType.DAILY, {
            repeatBeginHour: repeatBeginHour,
            repeatEndHour: repeatEndHour,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            absoluteBegin: options === null || options === void 0 ? void 0 : options.absoluteBegin,
            absoluteEnd: options === null || options === void 0 ? void 0 : options.absoluteEnd,
        });
    }
    static repeatTypeIsWeekly(name, scheduleType, repeatSetting, repeatBeginDayOfWeek, repeatEndDayOfWeek, repeatBeginHour, repeatEndHour, options = null) {
        return new Event(name, scheduleType, repeatSetting, EventRepeatType_1.EventRepeatType.WEEKLY, {
            repeatBeginDayOfWeek: repeatBeginDayOfWeek,
            repeatEndDayOfWeek: repeatEndDayOfWeek,
            repeatBeginHour: repeatBeginHour,
            repeatEndHour: repeatEndHour,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            absoluteBegin: options === null || options === void 0 ? void 0 : options.absoluteBegin,
            absoluteEnd: options === null || options === void 0 ? void 0 : options.absoluteEnd,
        });
    }
    static repeatTypeIsMonthly(name, scheduleType, repeatSetting, repeatBeginDayOfMonth, repeatEndDayOfMonth, repeatBeginHour, repeatEndHour, options = null) {
        return new Event(name, scheduleType, repeatSetting, EventRepeatType_1.EventRepeatType.MONTHLY, {
            repeatBeginDayOfMonth: repeatBeginDayOfMonth,
            repeatEndDayOfMonth: repeatEndDayOfMonth,
            repeatBeginHour: repeatBeginHour,
            repeatEndHour: repeatEndHour,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            absoluteBegin: options === null || options === void 0 ? void 0 : options.absoluteBegin,
            absoluteEnd: options === null || options === void 0 ? void 0 : options.absoluteEnd,
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
        if (this.scheduleType != null) {
            properties["scheduleType"] = this.scheduleType;
        }
        if (this.absoluteBegin != null) {
            properties["absoluteBegin"] = this.absoluteBegin;
        }
        if (this.absoluteEnd != null) {
            properties["absoluteEnd"] = this.absoluteEnd;
        }
        if (this.relativeTriggerName != null) {
            properties["relativeTriggerName"] = this.relativeTriggerName;
        }
        if (this.repeatSetting != null) {
            properties["repeatSetting"] = (_a = this.repeatSetting) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.repeatType != null) {
            properties["repeatType"] = this.repeatType;
        }
        if (this.repeatBeginDayOfMonth != null) {
            properties["repeatBeginDayOfMonth"] = this.repeatBeginDayOfMonth;
        }
        if (this.repeatEndDayOfMonth != null) {
            properties["repeatEndDayOfMonth"] = this.repeatEndDayOfMonth;
        }
        if (this.repeatBeginDayOfWeek != null) {
            properties["repeatBeginDayOfWeek"] = this.repeatBeginDayOfWeek;
        }
        if (this.repeatEndDayOfWeek != null) {
            properties["repeatEndDayOfWeek"] = this.repeatEndDayOfWeek;
        }
        if (this.repeatBeginHour != null) {
            properties["repeatBeginHour"] = this.repeatBeginHour;
        }
        if (this.repeatEndHour != null) {
            properties["repeatEndHour"] = this.repeatEndHour;
        }
        return properties;
    }
}
exports.default = Event;
//# sourceMappingURL=Event.js.map