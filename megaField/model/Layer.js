"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Layer {
    constructor(areaModelName, layerModelName, numberOfMinEntries, numberOfMaxEntries, height, options = null) {
        var _a;
        this.root = null;
        this.areaModelName = areaModelName;
        this.layerModelName = layerModelName;
        this.numberOfMinEntries = numberOfMinEntries;
        this.numberOfMaxEntries = numberOfMaxEntries;
        this.height = height;
        this.root = (_a = options === null || options === void 0 ? void 0 : options.root) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.areaModelName != null) {
            properties["areaModelName"] = this.areaModelName;
        }
        if (this.layerModelName != null) {
            properties["layerModelName"] = this.layerModelName;
        }
        if (this.root != null) {
            properties["root"] = this.root;
        }
        if (this.numberOfMinEntries != null) {
            properties["numberOfMinEntries"] = this.numberOfMinEntries;
        }
        if (this.numberOfMaxEntries != null) {
            properties["numberOfMaxEntries"] = this.numberOfMaxEntries;
        }
        if (this.height != null) {
            properties["height"] = this.height;
        }
        return properties;
    }
}
exports.default = Layer;
//# sourceMappingURL=Layer.js.map