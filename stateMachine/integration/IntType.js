"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IntType {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getTypeName() {
        return "int";
    }
    gsl() {
        return `${this.getTypeName()} ${this.getName()}`;
    }
}
exports.default = IntType;
//# sourceMappingURL=IntType.js.map