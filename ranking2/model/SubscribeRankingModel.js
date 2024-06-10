"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubscribeRankingModel {
    constructor(name, sum, orderDirection, options = null) {
        var _a, _b, _c, _d, _e;
        this.metadata = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.entryPeriodEventId = null;
        this.accessPeriodEventId = null;
        this.name = name;
        this.sum = sum;
        this.orderDirection = orderDirection;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.minimumValue = (_b = options === null || options === void 0 ? void 0 : options.minimumValue) !== null && _b !== void 0 ? _b : null;
        this.maximumValue = (_c = options === null || options === void 0 ? void 0 : options.maximumValue) !== null && _c !== void 0 ? _c : null;
        this.entryPeriodEventId = (_d = options === null || options === void 0 ? void 0 : options.entryPeriodEventId) !== null && _d !== void 0 ? _d : null;
        this.accessPeriodEventId = (_e = options === null || options === void 0 ? void 0 : options.accessPeriodEventId) !== null && _e !== void 0 ? _e : null;
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
        if (this.sum != null) {
            properties["sum"] = this.sum;
        }
        if (this.orderDirection != null) {
            properties["orderDirection"] = this.orderDirection;
        }
        if (this.entryPeriodEventId != null) {
            properties["entryPeriodEventId"] = this.entryPeriodEventId;
        }
        if (this.accessPeriodEventId != null) {
            properties["accessPeriodEventId"] = this.accessPeriodEventId;
        }
        return properties;
    }
}
exports.default = SubscribeRankingModel;
//# sourceMappingURL=SubscribeRankingModel.js.map