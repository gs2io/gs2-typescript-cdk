"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Position {
    constructor(x, y, z, options = null) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    properties() {
        let properties = {};
        if (this.x != null) {
            properties["x"] = this.x;
        }
        if (this.y != null) {
            properties["y"] = this.y;
        }
        if (this.z != null) {
            properties["z"] = this.z;
        }
        return properties;
    }
}
exports.default = Position;
//# sourceMappingURL=Position.js.map