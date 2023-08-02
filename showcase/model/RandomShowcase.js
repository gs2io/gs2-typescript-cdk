"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RandomShowcase {
    constructor(name, maximumNumberOfChoice, displayItems, baseTimestamp, resetIntervalHours, options = null) {
        var _a, _b;
        this.metadata = null;
        this.salesPeriodEventId = null;
        this.name = name;
        this.maximumNumberOfChoice = maximumNumberOfChoice;
        this.displayItems = displayItems;
        this.baseTimestamp = baseTimestamp;
        this.resetIntervalHours = resetIntervalHours;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.salesPeriodEventId = (_b = options === null || options === void 0 ? void 0 : options.salesPeriodEventId) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.maximumNumberOfChoice != null) {
            properties["maximumNumberOfChoice"] = this.maximumNumberOfChoice;
        }
        if (this.displayItems != null) {
            properties["displayItems"] = this.displayItems.map(v => v.properties());
        }
        if (this.baseTimestamp != null) {
            properties["baseTimestamp"] = this.baseTimestamp;
        }
        if (this.resetIntervalHours != null) {
            properties["resetIntervalHours"] = this.resetIntervalHours;
        }
        if (this.salesPeriodEventId != null) {
            properties["salesPeriodEventId"] = this.salesPeriodEventId;
        }
        return properties;
    }
}
exports.default = RandomShowcase;
//# sourceMappingURL=RandomShowcase.js.map