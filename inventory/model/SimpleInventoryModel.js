"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleInventoryModel {
    constructor(name, simpleItemModels, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.simpleItemModels = simpleItemModels;
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
        if (this.simpleItemModels != null) {
            properties["simpleItemModels"] = this.simpleItemModels.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = SimpleInventoryModel;
//# sourceMappingURL=SimpleInventoryModel.js.map