"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const GlobalMessageRef_1 = tslib_1.__importDefault(require("../ref/GlobalMessageRef"));
class GlobalMessage {
    constructor(name, metadata, options) {
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
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.readAcquireActions != null) {
            properties["ReadAcquireActions"] = this.readAcquireActions.map(v => v.properties());
        }
        if (this.expiresTimeSpan != null) {
            properties["ExpiresTimeSpan"] = this.expiresTimeSpan.properties();
        }
        if (this.expiresAt != null) {
            properties["ExpiresAt"] = this.expiresAt;
        }
        return properties;
    }
    ref(namespaceName) {
        return new GlobalMessageRef_1.default(namespaceName, this.name);
    }
}
exports.default = GlobalMessage;
//# sourceMappingURL=GlobalMessage.js.map