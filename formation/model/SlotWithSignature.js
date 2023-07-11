"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SlotWithSignature {
    constructor(name, propertyType, body, signature, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.propertyType = propertyType;
        this.body = body;
        this.signature = signature;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
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