"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RarityParameterValueModel {
    constructor(name, resourceName, resourceValue, weight, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.resourceName = resourceName;
        this.resourceValue = resourceValue;
        this.weight = weight;
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
        if (this.resourceName != null) {
            properties["resourceName"] = this.resourceName;
        }
        if (this.resourceValue != null) {
            properties["resourceValue"] = this.resourceValue;
        }
        if (this.weight != null) {
            properties["weight"] = this.weight;
        }
        return properties;
    }
}
exports.default = RarityParameterValueModel;
//# sourceMappingURL=RarityParameterValueModel.js.map