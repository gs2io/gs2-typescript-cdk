"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Variable {
    constructor(stateMachineName, value, options = null) {
        this.stateMachineName = stateMachineName;
        this.value = value;
    }
    properties() {
        let properties = {};
        if (this.stateMachineName != null) {
            properties["stateMachineName"] = this.stateMachineName;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }
        return properties;
    }
}
exports.default = Variable;
//# sourceMappingURL=Variable.js.map