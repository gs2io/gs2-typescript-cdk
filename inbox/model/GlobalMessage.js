"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GlobalMessage {
    constructor(name, metadata, options = null) {
        var _a, _b, _c;
        this.readAcquireActions = null;
        this.expiresTimeSpan = null;
        this.expiresAt = null;
        this.name = name;
        this.metadata = metadata;
        this.readAcquireActions = (_a = options === null || options === void 0 ? void 0 : options.readAcquireActions) !== null && _a !== void 0 ? _a : null;
        this.expiresTimeSpan = (_b = options === null || options === void 0 ? void 0 : options.expiresTimeSpan) !== null && _b !== void 0 ? _b : null;
        this.expiresAt = (_c = options === null || options === void 0 ? void 0 : options.expiresAt) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        var _a;
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.readAcquireActions != null) {
            properties["readAcquireActions"] = this.readAcquireActions.map(v => v.properties());
        }
        if (this.expiresTimeSpan != null) {
            properties["expiresTimeSpan"] = (_a = this.expiresTimeSpan) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.expiresAt != null) {
            properties["expiresAt"] = this.expiresAt;
        }
        return properties;
    }
}
exports.default = GlobalMessage;
//# sourceMappingURL=GlobalMessage.js.map