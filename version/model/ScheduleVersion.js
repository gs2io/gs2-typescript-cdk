"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScheduleVersion {
    constructor(currentVersion, warningVersion, errorVersion, options = null) {
        var _a;
        this.scheduleEventId = null;
        this.currentVersion = currentVersion;
        this.warningVersion = warningVersion;
        this.errorVersion = errorVersion;
        this.scheduleEventId = (_a = options === null || options === void 0 ? void 0 : options.scheduleEventId) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        var _a, _b, _c;
        let properties = {};
        if (this.currentVersion != null) {
            properties["currentVersion"] = (_a = this.currentVersion) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.warningVersion != null) {
            properties["warningVersion"] = (_b = this.warningVersion) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.errorVersion != null) {
            properties["errorVersion"] = (_c = this.errorVersion) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.scheduleEventId != null) {
            properties["scheduleEventId"] = this.scheduleEventId;
        }
        return properties;
    }
}
exports.default = ScheduleVersion;
//# sourceMappingURL=ScheduleVersion.js.map