"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringType {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getTypeName() {
        return "string";
    }
    gsl() {
        return `${this.getTypeName()} ${this.getName()}`;
    }
}
exports.default = StringType;
//# sourceMappingURL=StringType.js.map