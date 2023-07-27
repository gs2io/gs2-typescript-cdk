"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MapType {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getTypeName() {
        return "map";
    }
    gsl() {
        return `${this.getTypeName()} ${this.getName()}`;
    }
}
exports.default = MapType;
//# sourceMappingURL=MapType.js.map