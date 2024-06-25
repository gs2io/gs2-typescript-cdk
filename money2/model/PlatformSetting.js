"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlatformSetting {
    constructor(options = null) {
        var _a, _b, _c;
        this.appleAppStore = null;
        this.googlePlay = null;
        this.fake = null;
        this.appleAppStore = (_a = options === null || options === void 0 ? void 0 : options.appleAppStore) !== null && _a !== void 0 ? _a : null;
        this.googlePlay = (_b = options === null || options === void 0 ? void 0 : options.googlePlay) !== null && _b !== void 0 ? _b : null;
        this.fake = (_c = options === null || options === void 0 ? void 0 : options.fake) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        var _a, _b, _c;
        let properties = {};
        if (this.appleAppStore != null) {
            properties["appleAppStore"] = (_a = this.appleAppStore) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.googlePlay != null) {
            properties["googlePlay"] = (_b = this.googlePlay) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.fake != null) {
            properties["fake"] = (_c = this.fake) === null || _c === void 0 ? void 0 : _c.properties();
        }
        return properties;
    }
}
exports.default = PlatformSetting;
//# sourceMappingURL=PlatformSetting.js.map