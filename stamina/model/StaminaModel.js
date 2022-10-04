"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const StaminaModelRef_1 = tslib_1.__importDefault(require("../ref/StaminaModelRef"));
class StaminaModel {
    constructor(name, recoverIntervalMinutes, recoverValue, initialCapacity, isOverflow, options) {
        var _a, _b, _c, _d, _e;
        this.metadata = null;
        this.maxCapacity = null;
        this.maxStaminaTable = null;
        this.recoverIntervalTable = null;
        this.recoverValueTable = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        this.recoverValue = recoverValue;
        this.initialCapacity = initialCapacity;
        this.isOverflow = isOverflow;
        this.maxCapacity = (_b = options === null || options === void 0 ? void 0 : options.maxCapacity) !== null && _b !== void 0 ? _b : null;
        this.maxStaminaTable = (_c = options === null || options === void 0 ? void 0 : options.maxStaminaTable) !== null && _c !== void 0 ? _c : null;
        this.recoverIntervalTable = (_d = options === null || options === void 0 ? void 0 : options.recoverIntervalTable) !== null && _d !== void 0 ? _d : null;
        this.recoverValueTable = (_e = options === null || options === void 0 ? void 0 : options.recoverValueTable) !== null && _e !== void 0 ? _e : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.recoverIntervalMinutes != null) {
            properties["RecoverIntervalMinutes"] = this.recoverIntervalMinutes;
        }
        if (this.recoverValue != null) {
            properties["RecoverValue"] = this.recoverValue;
        }
        if (this.initialCapacity != null) {
            properties["InitialCapacity"] = this.initialCapacity;
        }
        if (this.isOverflow != null) {
            properties["IsOverflow"] = this.isOverflow;
        }
        if (this.maxCapacity != null) {
            properties["MaxCapacity"] = this.maxCapacity;
        }
        if (this.maxStaminaTable != null) {
            properties["MaxStaminaTable"] = this.maxStaminaTable.properties();
        }
        if (this.recoverIntervalTable != null) {
            properties["RecoverIntervalTable"] = this.recoverIntervalTable.properties();
        }
        if (this.recoverValueTable != null) {
            properties["RecoverValueTable"] = this.recoverValueTable.properties();
        }
        return properties;
    }
    ref(namespaceName) {
        return new StaminaModelRef_1.default(namespaceName, this.name);
    }
}
exports.default = StaminaModel;
//# sourceMappingURL=StaminaModel.js.map