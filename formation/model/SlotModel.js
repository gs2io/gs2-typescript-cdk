"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SlotModel {
    constructor(name, propertyRegex, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.propertyRegex = propertyRegex;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.propertyRegex != null) {
            properties["propertyRegex"] = this.propertyRegex;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        return properties;
    }
}
exports.default = SlotModel;
//# sourceMappingURL=SlotModel.js.map