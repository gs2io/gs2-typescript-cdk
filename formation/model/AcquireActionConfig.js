"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AcquireActionConfig {
    constructor(name, options = null) {
        var _a;
        this.config = null;
        this.name = name;
        this.config = (_a = options === null || options === void 0 ? void 0 : options.config) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.config != null) {
            properties["config"] = this.config.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = AcquireActionConfig;
//# sourceMappingURL=AcquireActionConfig.js.map