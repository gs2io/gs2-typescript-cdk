"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnleashRecipe {
    constructor(name, materials, options = null) {
        var _a, _b;
        this.metadata = null;
        this.targetGroupKeys = null;
        this.name = name;
        this.materials = materials;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.targetGroupKeys = (_b = options === null || options === void 0 ? void 0 : options.targetGroupKeys) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.targetGroupKeys != null) {
            properties["targetGroupKeys"] = this.targetGroupKeys;
        }
        if (this.materials != null) {
            properties["materials"] = this.materials.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = UnleashRecipe;
//# sourceMappingURL=UnleashRecipe.js.map