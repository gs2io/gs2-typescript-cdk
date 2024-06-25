"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StoreContentModel {
    constructor(name, options = null) {
        var _a, _b, _c;
        this.metadata = null;
        this.appleAppStore = null;
        this.googlePlay = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.appleAppStore = (_b = options === null || options === void 0 ? void 0 : options.appleAppStore) !== null && _b !== void 0 ? _b : null;
        this.googlePlay = (_c = options === null || options === void 0 ? void 0 : options.googlePlay) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        var _a, _b;
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.appleAppStore != null) {
            properties["appleAppStore"] = (_a = this.appleAppStore) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.googlePlay != null) {
            properties["googlePlay"] = (_b = this.googlePlay) === null || _b === void 0 ? void 0 : _b.properties();
        }
        return properties;
    }
}
exports.default = StoreContentModel;
//# sourceMappingURL=StoreContentModel.js.map