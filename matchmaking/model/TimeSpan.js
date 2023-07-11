"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimeSpan {
    constructor(days, hours, minutes, options = null) {
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
    }
    properties() {
        let properties = {};
        if (this.days != null) {
            properties["days"] = this.days;
        }
        if (this.hours != null) {
            properties["hours"] = this.hours;
        }
        if (this.minutes != null) {
            properties["minutes"] = this.minutes;
        }
        return properties;
    }
}
exports.default = TimeSpan;
//# sourceMappingURL=TimeSpan.js.map