"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SyncSetting {
    constructor(options = null) {
        var _a;
        this.objectCatalog = null;
        this.objectCatalog = (_a = options === null || options === void 0 ? void 0 : options.objectCatalog) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.objectCatalog != null) {
            properties["objectCatalog"] = this.objectCatalog;
        }
        return properties;
    }
}
exports.default = SyncSetting;
//# sourceMappingURL=SyncSetting.js.map