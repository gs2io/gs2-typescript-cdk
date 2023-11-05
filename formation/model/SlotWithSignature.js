"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SlotWithSignature {
    constructor(name, propertyType, options = null) {
        var _a, _b, _c;
        this.body = null;
        this.signature = null;
        this.metadata = null;
        this.name = name;
        this.propertyType = propertyType;
        this.body = (_a = options === null || options === void 0 ? void 0 : options.body) !== null && _a !== void 0 ? _a : null;
        this.signature = (_b = options === null || options === void 0 ? void 0 : options.signature) !== null && _b !== void 0 ? _b : null;
        this.metadata = (_c = options === null || options === void 0 ? void 0 : options.metadata) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.propertyType != null) {
            properties["propertyType"] = this.propertyType;
        }
        if (this.body != null) {
            properties["body"] = this.body;
        }
        if (this.signature != null) {
            properties["signature"] = this.signature;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        return properties;
    }
}
exports.default = SlotWithSignature;
//# sourceMappingURL=SlotWithSignature.js.map