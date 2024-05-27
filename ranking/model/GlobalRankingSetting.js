"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GlobalRankingSetting {
    constructor(uniqueByUserId, calculateIntervalMinutes, options = null) {
        var _a, _b, _c, _d;
        this.calculateFixedTiming = null;
        this.additionalScopes = null;
        this.ignoreUserIds = null;
        this.generation = null;
        this.uniqueByUserId = uniqueByUserId;
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        this.calculateFixedTiming = (_a = options === null || options === void 0 ? void 0 : options.calculateFixedTiming) !== null && _a !== void 0 ? _a : null;
        this.additionalScopes = (_b = options === null || options === void 0 ? void 0 : options.additionalScopes) !== null && _b !== void 0 ? _b : null;
        this.ignoreUserIds = (_c = options === null || options === void 0 ? void 0 : options.ignoreUserIds) !== null && _c !== void 0 ? _c : null;
        this.generation = (_d = options === null || options === void 0 ? void 0 : options.generation) !== null && _d !== void 0 ? _d : null;
    }
    properties() {
        var _a;
        let properties = {};
        if (this.uniqueByUserId != null) {
            properties["uniqueByUserId"] = this.uniqueByUserId;
        }
        if (this.calculateIntervalMinutes != null) {
            properties["calculateIntervalMinutes"] = this.calculateIntervalMinutes;
        }
        if (this.calculateFixedTiming != null) {
            properties["calculateFixedTiming"] = (_a = this.calculateFixedTiming) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.additionalScopes != null) {
            properties["additionalScopes"] = this.additionalScopes.map(v => v.properties());
        }
        if (this.ignoreUserIds != null) {
            properties["ignoreUserIds"] = this.ignoreUserIds;
        }
        if (this.generation != null) {
            properties["generation"] = this.generation;
        }
        return properties;
    }
}
exports.default = GlobalRankingSetting;
//# sourceMappingURL=GlobalRankingSetting.js.map