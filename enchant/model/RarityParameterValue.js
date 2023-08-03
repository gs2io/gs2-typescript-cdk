"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RarityParameterValue {
    constructor(name, resourceName, resourceValue, options = null) {
        this.name = name;
        this.resourceName = resourceName;
        this.resourceValue = resourceValue;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.resourceName != null) {
            properties["resourceName"] = this.resourceName;
        }
        if (this.resourceValue != null) {
            properties["resourceValue"] = this.resourceValue;
        }
        return properties;
    }
}
exports.default = RarityParameterValue;
//# sourceMappingURL=RarityParameterValue.js.map