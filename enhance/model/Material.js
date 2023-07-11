"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Material {
    constructor(materialItemSetId, count, options = null) {
        this.materialItemSetId = materialItemSetId;
        this.count = count;
    }
    properties() {
        let properties = {};
        if (this.materialItemSetId != null) {
            properties["materialItemSetId"] = this.materialItemSetId;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        return properties;
    }
}
exports.default = Material;
//# sourceMappingURL=Material.js.map