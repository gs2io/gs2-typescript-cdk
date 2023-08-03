"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scope {
    constructor(name, targetDays, options = null) {
        this.name = name;
        this.targetDays = targetDays;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.targetDays != null) {
            properties["targetDays"] = this.targetDays;
        }
        return properties;
    }
}
exports.default = Scope;
//# sourceMappingURL=Scope.js.map