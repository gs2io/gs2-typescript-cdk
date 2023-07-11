"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyPosition {
    constructor(position, vector, r, options = null) {
        this.position = position;
        this.vector = vector;
        this.r = r;
    }
    properties() {
        var _a, _b;
        let properties = {};
        if (this.position != null) {
            properties["position"] = (_a = this.position) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.vector != null) {
            properties["vector"] = (_b = this.vector) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.r != null) {
            properties["r"] = this.r;
        }
        return properties;
    }
}
exports.default = MyPosition;
//# sourceMappingURL=MyPosition.js.map