"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProjectToken {
    constructor(options = null) {
        var _a;
        this.token = null;
        this.token = (_a = options === null || options === void 0 ? void 0 : options.token) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.token != null) {
            properties["token"] = this.token;
        }
        return properties;
    }
}
exports.default = ProjectToken;
//# sourceMappingURL=ProjectToken.js.map