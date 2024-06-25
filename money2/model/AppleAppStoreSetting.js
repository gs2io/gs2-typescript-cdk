"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppleAppStoreSetting {
    constructor(options = null) {
        var _a;
        this.bundleId = null;
        this.bundleId = (_a = options === null || options === void 0 ? void 0 : options.bundleId) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.bundleId != null) {
            properties["bundleId"] = this.bundleId;
        }
        return properties;
    }
}
exports.default = AppleAppStoreSetting;
//# sourceMappingURL=AppleAppStoreSetting.js.map