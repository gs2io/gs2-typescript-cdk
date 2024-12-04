"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AcquireActionResult {
    constructor(action, acquireRequest, options = null) {
        var _a, _b;
        this.statusCode = null;
        this.acquireResult = null;
        this.action = action;
        this.acquireRequest = acquireRequest;
        this.statusCode = (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : null;
        this.acquireResult = (_b = options === null || options === void 0 ? void 0 : options.acquireResult) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.action != null) {
            properties["action"] = this.action;
        }
        if (this.acquireRequest != null) {
            properties["acquireRequest"] = this.acquireRequest;
        }
        if (this.statusCode != null) {
            properties["statusCode"] = this.statusCode;
        }
        if (this.acquireResult != null) {
            properties["acquireResult"] = this.acquireResult;
        }
        return properties;
    }
}
exports.default = AcquireActionResult;
//# sourceMappingURL=AcquireActionResult.js.map