"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayType {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getTypeName() {
        return "array";
    }
    gsl() {
        return `${this.getTypeName()} ${this.getName()}`;
    }
}
exports.default = ArrayType;
//# sourceMappingURL=ArrayType.js.map