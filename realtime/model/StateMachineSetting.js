"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StateMachineSetting {
    constructor(namespaceId, options = null) {
        var _a;
        this.version = null;
        this.namespaceId = namespaceId;
        this.version = (_a = options === null || options === void 0 ? void 0 : options.version) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.namespaceId != null) {
            properties["namespaceId"] = this.namespaceId;
        }
        if (this.version != null) {
            properties["version"] = this.version;
        }
        return properties;
    }
}
exports.default = StateMachineSetting;
//# sourceMappingURL=StateMachineSetting.js.map