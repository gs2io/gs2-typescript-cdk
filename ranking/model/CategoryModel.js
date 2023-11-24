"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryModelScope_1 = require("./enum/CategoryModelScope");
class CategoryModel {
    constructor(name, orderDirection, scope, options = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        this.metadata = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.uniqueByUserId = null;
        this.sum = null;
        this.calculateFixedTimingHour = null;
        this.calculateFixedTimingMinute = null;
        this.calculateIntervalMinutes = null;
        this.additionalScopes = null;
        this.entryPeriodEventId = null;
        this.accessPeriodEventId = null;
        this.ignoreUserIds = null;
        this.generation = null;
        this.name = name;
        this.orderDirection = orderDirection;
        this.scope = scope;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.minimumValue = (_b = options === null || options === void 0 ? void 0 : options.minimumValue) !== null && _b !== void 0 ? _b : null;
        this.maximumValue = (_c = options === null || options === void 0 ? void 0 : options.maximumValue) !== null && _c !== void 0 ? _c : null;
        this.uniqueByUserId = (_d = options === null || options === void 0 ? void 0 : options.uniqueByUserId) !== null && _d !== void 0 ? _d : null;
        this.sum = (_e = options === null || options === void 0 ? void 0 : options.sum) !== null && _e !== void 0 ? _e : null;
        this.calculateFixedTimingHour = (_f = options === null || options === void 0 ? void 0 : options.calculateFixedTimingHour) !== null && _f !== void 0 ? _f : null;
        this.calculateFixedTimingMinute = (_g = options === null || options === void 0 ? void 0 : options.calculateFixedTimingMinute) !== null && _g !== void 0 ? _g : null;
        this.calculateIntervalMinutes = (_h = options === null || options === void 0 ? void 0 : options.calculateIntervalMinutes) !== null && _h !== void 0 ? _h : null;
        this.additionalScopes = (_j = options === null || options === void 0 ? void 0 : options.additionalScopes) !== null && _j !== void 0 ? _j : null;
        this.entryPeriodEventId = (_k = options === null || options === void 0 ? void 0 : options.entryPeriodEventId) !== null && _k !== void 0 ? _k : null;
        this.accessPeriodEventId = (_l = options === null || options === void 0 ? void 0 : options.accessPeriodEventId) !== null && _l !== void 0 ? _l : null;
        this.ignoreUserIds = (_m = options === null || options === void 0 ? void 0 : options.ignoreUserIds) !== null && _m !== void 0 ? _m : null;
        this.generation = (_o = options === null || options === void 0 ? void 0 : options.generation) !== null && _o !== void 0 ? _o : null;
    }
    static scopeIsGlobal(name, orderDirection, uniqueByUserId, calculateIntervalMinutes, options = null) {
        return new CategoryModel(name, orderDirection, CategoryModelScope_1.CategoryModelScope.GLOBAL, {
            uniqueByUserId: uniqueByUserId,
            calculateIntervalMinutes: calculateIntervalMinutes,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            minimumValue: options === null || options === void 0 ? void 0 : options.minimumValue,
            maximumValue: options === null || options === void 0 ? void 0 : options.maximumValue,
            calculateFixedTimingHour: options === null || options === void 0 ? void 0 : options.calculateFixedTimingHour,
            calculateFixedTimingMinute: options === null || options === void 0 ? void 0 : options.calculateFixedTimingMinute,
            additionalScopes: options === null || options === void 0 ? void 0 : options.additionalScopes,
            entryPeriodEventId: options === null || options === void 0 ? void 0 : options.entryPeriodEventId,
            accessPeriodEventId: options === null || options === void 0 ? void 0 : options.accessPeriodEventId,
            ignoreUserIds: options === null || options === void 0 ? void 0 : options.ignoreUserIds,
            generation: options === null || options === void 0 ? void 0 : options.generation,
        });
    }
    static scopeIsScoped(name, orderDirection, options = null) {
        return new CategoryModel(name, orderDirection, CategoryModelScope_1.CategoryModelScope.SCOPED, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            minimumValue: options === null || options === void 0 ? void 0 : options.minimumValue,
            maximumValue: options === null || options === void 0 ? void 0 : options.maximumValue,
            calculateFixedTimingHour: options === null || options === void 0 ? void 0 : options.calculateFixedTimingHour,
            calculateFixedTimingMinute: options === null || options === void 0 ? void 0 : options.calculateFixedTimingMinute,
            additionalScopes: options === null || options === void 0 ? void 0 : options.additionalScopes,
            entryPeriodEventId: options === null || options === void 0 ? void 0 : options.entryPeriodEventId,
            accessPeriodEventId: options === null || options === void 0 ? void 0 : options.accessPeriodEventId,
            ignoreUserIds: options === null || options === void 0 ? void 0 : options.ignoreUserIds,
            generation: options === null || options === void 0 ? void 0 : options.generation,
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
        if (this.minimumValue != null) {
            properties["minimumValue"] = this.minimumValue;
        }
        if (this.maximumValue != null) {
            properties["maximumValue"] = this.maximumValue;
        }
        if (this.orderDirection != null) {
            properties["orderDirection"] = this.orderDirection;
        }
        if (this.scope != null) {
            properties["scope"] = this.scope;
        }
        if (this.uniqueByUserId != null) {
            properties["uniqueByUserId"] = this.uniqueByUserId;
        }
        if (this.sum != null) {
            properties["sum"] = this.sum;
        }
        if (this.calculateFixedTimingHour != null) {
            properties["calculateFixedTimingHour"] = this.calculateFixedTimingHour;
        }
        if (this.calculateFixedTimingMinute != null) {
            properties["calculateFixedTimingMinute"] = this.calculateFixedTimingMinute;
        }
        if (this.calculateIntervalMinutes != null) {
            properties["calculateIntervalMinutes"] = this.calculateIntervalMinutes;
        }
        if (this.additionalScopes != null) {
            properties["additionalScopes"] = this.additionalScopes.map(v => v.properties());
        }
        if (this.entryPeriodEventId != null) {
            properties["entryPeriodEventId"] = this.entryPeriodEventId;
        }
        if (this.accessPeriodEventId != null) {
            properties["accessPeriodEventId"] = this.accessPeriodEventId;
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
exports.default = CategoryModel;
//# sourceMappingURL=CategoryModel.js.map