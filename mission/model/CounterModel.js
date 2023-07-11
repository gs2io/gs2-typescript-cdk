"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CounterModel {
    constructor(name, scopes, options = null) {
        var _a, _b;
        this.metadata = null;
        this.challengePeriodEventId = null;
        this.name = name;
        this.scopes = scopes;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.challengePeriodEventId = (_b = options === null || options === void 0 ? void 0 : options.challengePeriodEventId) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.scopes != null) {
            properties["scopes"] = this.scopes.map(v => v.properties());
        }
        if (this.challengePeriodEventId != null) {
            properties["challengePeriodEventId"] = this.challengePeriodEventId;
        }
        return properties;
    }
}
exports.default = CounterModel;
//# sourceMappingURL=CounterModel.js.map