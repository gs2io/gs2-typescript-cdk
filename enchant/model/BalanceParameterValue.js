"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BalanceParameterValue {
    constructor(name, value, options = null) {
        this.name = name;
        this.value = value;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }
        return properties;
    }
}
exports.default = BalanceParameterValue;
//# sourceMappingURL=BalanceParameterValue.js.map