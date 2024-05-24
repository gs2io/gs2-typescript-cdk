"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Slot {
    constructor(name, options = null) {
        var _a, _b;
        this.propertyId = null;
        this.metadata = null;
        this.name = name;
        this.propertyId = (_a = options === null || options === void 0 ? void 0 : options.propertyId) !== null && _a !== void 0 ? _a : null;
        this.metadata = (_b = options === null || options === void 0 ? void 0 : options.metadata) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.propertyId != null) {
            properties["propertyId"] = this.propertyId;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        return properties;
    }
}
exports.default = Slot;
//# sourceMappingURL=Slot.js.map