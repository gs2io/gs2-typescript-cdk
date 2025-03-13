"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StoreSubscriptionContentModelTriggerExtendMode_1 = require("./enums/StoreSubscriptionContentModelTriggerExtendMode");
class StoreSubscriptionContentModel {
    constructor(name, scheduleNamespaceId, triggerName, triggerExtendMode, reallocateSpanDays, options = null) {
        var _a, _b, _c, _d;
        this.metadata = null;
        this.rollupHour = null;
        this.appleAppStore = null;
        this.googlePlay = null;
        this.name = name;
        this.scheduleNamespaceId = scheduleNamespaceId;
        this.triggerName = triggerName;
        this.triggerExtendMode = triggerExtendMode;
        this.reallocateSpanDays = reallocateSpanDays;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.rollupHour = (_b = options === null || options === void 0 ? void 0 : options.rollupHour) !== null && _b !== void 0 ? _b : null;
        this.appleAppStore = (_c = options === null || options === void 0 ? void 0 : options.appleAppStore) !== null && _c !== void 0 ? _c : null;
        this.googlePlay = (_d = options === null || options === void 0 ? void 0 : options.googlePlay) !== null && _d !== void 0 ? _d : null;
    }
    static triggerExtendModeIsJust(name, scheduleNamespaceId, triggerName, reallocateSpanDays, options = null) {
        return new StoreSubscriptionContentModel(name, scheduleNamespaceId, triggerName, StoreSubscriptionContentModelTriggerExtendMode_1.StoreSubscriptionContentModelTriggerExtendMode.JUST, reallocateSpanDays, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            appleAppStore: options === null || options === void 0 ? void 0 : options.appleAppStore,
            googlePlay: options === null || options === void 0 ? void 0 : options.googlePlay,
        });
    }
    static triggerExtendModeIsRollupHour(name, scheduleNamespaceId, triggerName, reallocateSpanDays, rollupHour, options = null) {
        return new StoreSubscriptionContentModel(name, scheduleNamespaceId, triggerName, StoreSubscriptionContentModelTriggerExtendMode_1.StoreSubscriptionContentModelTriggerExtendMode.ROLLUP_HOUR, reallocateSpanDays, {
            rollupHour: rollupHour,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            appleAppStore: options === null || options === void 0 ? void 0 : options.appleAppStore,
            googlePlay: options === null || options === void 0 ? void 0 : options.googlePlay,
        });
    }
    properties() {
        var _a, _b;
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.scheduleNamespaceId != null) {
            properties["scheduleNamespaceId"] = this.scheduleNamespaceId;
        }
        if (this.triggerName != null) {
            properties["triggerName"] = this.triggerName;
        }
        if (this.triggerExtendMode != null) {
            properties["triggerExtendMode"] = this.triggerExtendMode;
        }
        if (this.rollupHour != null) {
            properties["rollupHour"] = this.rollupHour;
        }
        if (this.reallocateSpanDays != null) {
            properties["reallocateSpanDays"] = this.reallocateSpanDays;
        }
        if (this.appleAppStore != null) {
            properties["appleAppStore"] = (_a = this.appleAppStore) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.googlePlay != null) {
            properties["googlePlay"] = (_b = this.googlePlay) === null || _b === void 0 ? void 0 : _b.properties();
        }
        return properties;
    }
}
exports.default = StoreSubscriptionContentModel;
//# sourceMappingURL=StoreSubscriptionContentModel.js.map