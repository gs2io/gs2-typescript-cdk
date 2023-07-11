"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StaminaModel {
    constructor(name, recoverIntervalMinutes, recoverValue, initialCapacity, isOverflow, options = null) {
        var _a, _b, _c, _d, _e;
        this.metadata = null;
        this.maxCapacity = null;
        this.maxStaminaTable = null;
        this.recoverIntervalTable = null;
        this.recoverValueTable = null;
        this.name = name;
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        this.recoverValue = recoverValue;
        this.initialCapacity = initialCapacity;
        this.isOverflow = isOverflow;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.maxCapacity = (_b = options === null || options === void 0 ? void 0 : options.maxCapacity) !== null && _b !== void 0 ? _b : null;
        this.maxStaminaTable = (_c = options === null || options === void 0 ? void 0 : options.maxStaminaTable) !== null && _c !== void 0 ? _c : null;
        this.recoverIntervalTable = (_d = options === null || options === void 0 ? void 0 : options.recoverIntervalTable) !== null && _d !== void 0 ? _d : null;
        this.recoverValueTable = (_e = options === null || options === void 0 ? void 0 : options.recoverValueTable) !== null && _e !== void 0 ? _e : null;
    }
    properties() {
        var _a, _b, _c;
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.recoverIntervalMinutes != null) {
            properties["recoverIntervalMinutes"] = this.recoverIntervalMinutes;
        }
        if (this.recoverValue != null) {
            properties["recoverValue"] = this.recoverValue;
        }
        if (this.initialCapacity != null) {
            properties["initialCapacity"] = this.initialCapacity;
        }
        if (this.isOverflow != null) {
            properties["isOverflow"] = this.isOverflow;
        }
        if (this.maxCapacity != null) {
            properties["maxCapacity"] = this.maxCapacity;
        }
        if (this.maxStaminaTable != null) {
            properties["maxStaminaTable"] = (_a = this.maxStaminaTable) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.recoverIntervalTable != null) {
            properties["recoverIntervalTable"] = (_b = this.recoverIntervalTable) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.recoverValueTable != null) {
            properties["recoverValueTable"] = (_c = this.recoverValueTable) === null || _c === void 0 ? void 0 : _c.properties();
        }
        return properties;
    }
}
exports.default = StaminaModel;
//# sourceMappingURL=StaminaModel.js.map