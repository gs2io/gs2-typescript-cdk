"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RatingModel {
    constructor(name, initialValue, volatility, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.initialValue = initialValue;
        this.volatility = volatility;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.initialValue != null) {
            properties["initialValue"] = this.initialValue;
        }
        if (this.volatility != null) {
            properties["volatility"] = this.volatility;
        }
        return properties;
    }
}
exports.default = RatingModel;
//# sourceMappingURL=RatingModel.js.map