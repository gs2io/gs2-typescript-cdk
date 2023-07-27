"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FloatType {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getTypeName() {
        return "float";
    }
    gsl() {
        return `${this.getTypeName()} ${this.getName()}`;
    }
}
exports.default = FloatType;
//# sourceMappingURL=FloatType.js.map