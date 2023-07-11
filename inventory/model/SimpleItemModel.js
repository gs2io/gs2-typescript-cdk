"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleItemModel {
    constructor(name, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        return properties;
    }
}
exports.default = SimpleItemModel;
//# sourceMappingURL=SimpleItemModel.js.map