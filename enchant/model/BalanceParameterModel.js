"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BalanceParameterModel {
    constructor(name, totalValue, initialValueStrategy, parameters, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.totalValue = totalValue;
        this.initialValueStrategy = initialValueStrategy;
        this.parameters = parameters;
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
        if (this.totalValue != null) {
            properties["totalValue"] = this.totalValue;
        }
        if (this.initialValueStrategy != null) {
            properties["initialValueStrategy"] = this.initialValueStrategy;
        }
        if (this.parameters != null) {
            properties["parameters"] = this.parameters.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = BalanceParameterModel;
//# sourceMappingURL=BalanceParameterModel.js.map