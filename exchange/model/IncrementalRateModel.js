"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IncrementalRateModelCalculateType_1 = require("./enum/IncrementalRateModelCalculateType");
class IncrementalRateModel {
    constructor(name, consumeAction, calculateType, exchangeCountId, options = null) {
        var _a, _b, _c, _d, _e;
        this.metadata = null;
        this.baseValue = null;
        this.coefficientValue = null;
        this.calculateScriptId = null;
        this.acquireActions = null;
        this.name = name;
        this.consumeAction = consumeAction;
        this.calculateType = calculateType;
        this.exchangeCountId = exchangeCountId;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.baseValue = (_b = options === null || options === void 0 ? void 0 : options.baseValue) !== null && _b !== void 0 ? _b : null;
        this.coefficientValue = (_c = options === null || options === void 0 ? void 0 : options.coefficientValue) !== null && _c !== void 0 ? _c : null;
        this.calculateScriptId = (_d = options === null || options === void 0 ? void 0 : options.calculateScriptId) !== null && _d !== void 0 ? _d : null;
        this.acquireActions = (_e = options === null || options === void 0 ? void 0 : options.acquireActions) !== null && _e !== void 0 ? _e : null;
    }
    static calculateTypeIsLinear(name, consumeAction, exchangeCountId, baseValue, coefficientValue, options = null) {
        return new IncrementalRateModel(name, consumeAction, IncrementalRateModelCalculateType_1.IncrementalRateModelCalculateType.LINEAR, exchangeCountId, {
            baseValue: baseValue,
            coefficientValue: coefficientValue,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            acquireActions: options === null || options === void 0 ? void 0 : options.acquireActions,
        });
    }
    static calculateTypeIsPower(name, consumeAction, exchangeCountId, coefficientValue, options = null) {
        return new IncrementalRateModel(name, consumeAction, IncrementalRateModelCalculateType_1.IncrementalRateModelCalculateType.POWER, exchangeCountId, {
            coefficientValue: coefficientValue,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            acquireActions: options === null || options === void 0 ? void 0 : options.acquireActions,
        });
    }
    static calculateTypeIsGs2Script(name, consumeAction, exchangeCountId, calculateScriptId, options = null) {
        return new IncrementalRateModel(name, consumeAction, IncrementalRateModelCalculateType_1.IncrementalRateModelCalculateType.GS2_SCRIPT, exchangeCountId, {
            calculateScriptId: calculateScriptId,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            acquireActions: options === null || options === void 0 ? void 0 : options.acquireActions,
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
        if (this.consumeAction != null) {
            properties["consumeAction"] = (_a = this.consumeAction) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.calculateType != null) {
            properties["calculateType"] = this.calculateType;
        }
        if (this.baseValue != null) {
            properties["baseValue"] = this.baseValue;
        }
        if (this.coefficientValue != null) {
            properties["coefficientValue"] = this.coefficientValue;
        }
        if (this.calculateScriptId != null) {
            properties["calculateScriptId"] = this.calculateScriptId;
        }
        if (this.exchangeCountId != null) {
            properties["exchangeCountId"] = this.exchangeCountId;
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = IncrementalRateModel;
//# sourceMappingURL=IncrementalRateModel.js.map