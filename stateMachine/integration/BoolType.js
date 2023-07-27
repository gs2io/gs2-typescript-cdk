"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BoolType {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getTypeName() {
        return "bool";
    }
    gsl() {
        return `${this.getTypeName()} ${this.getName()}`;
    }
}
exports.default = BoolType;
//# sourceMappingURL=BoolType.js.map