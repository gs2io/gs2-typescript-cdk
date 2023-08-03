"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RarityParameterModel {
    constructor(name, maximumParameterCount, parameterCounts, parameters, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.maximumParameterCount = maximumParameterCount;
        this.parameterCounts = parameterCounts;
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
        if (this.maximumParameterCount != null) {
            properties["maximumParameterCount"] = this.maximumParameterCount;
        }
        if (this.parameterCounts != null) {
            properties["parameterCounts"] = this.parameterCounts.map(v => v.properties());
        }
        if (this.parameters != null) {
            properties["parameters"] = this.parameters.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = RarityParameterModel;
//# sourceMappingURL=RarityParameterModel.js.map