"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scope {
    constructor(layerName, r, limit, options = null) {
        this.layerName = layerName;
        this.r = r;
        this.limit = limit;
    }
    properties() {
        let properties = {};
        if (this.layerName != null) {
            properties["layerName"] = this.layerName;
        }
        if (this.r != null) {
            properties["r"] = this.r;
        }
        if (this.limit != null) {
            properties["limit"] = this.limit;
        }
        return properties;
    }
}
exports.default = Scope;
//# sourceMappingURL=Scope.js.map