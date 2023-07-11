"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AreaModel {
    constructor(name, options = null) {
        var _a, _b;
        this.metadata = null;
        this.layerModels = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.layerModels = (_b = options === null || options === void 0 ? void 0 : options.layerModels) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.layerModels != null) {
            properties["layerModels"] = this.layerModels.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = AreaModel;
//# sourceMappingURL=AreaModel.js.map