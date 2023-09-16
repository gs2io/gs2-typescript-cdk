"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnityAd {
    constructor(options = null) {
        var _a;
        this.keys = null;
        this.keys = (_a = options === null || options === void 0 ? void 0 : options.keys) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.keys != null) {
            properties["keys"] = this.keys;
        }
        return properties;
    }
}
exports.default = UnityAd;
//# sourceMappingURL=UnityAd.js.map