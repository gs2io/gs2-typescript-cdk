"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerifyActionResult {
    constructor(action, verifyRequest, options = null) {
        var _a, _b;
        this.statusCode = null;
        this.verifyResult = null;
        this.action = action;
        this.verifyRequest = verifyRequest;
        this.statusCode = (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : null;
        this.verifyResult = (_b = options === null || options === void 0 ? void 0 : options.verifyResult) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.action != null) {
            properties["action"] = this.action;
        }
        if (this.verifyRequest != null) {
            properties["verifyRequest"] = this.verifyRequest;
        }
        if (this.statusCode != null) {
            properties["statusCode"] = this.statusCode;
        }
        if (this.verifyResult != null) {
            properties["verifyResult"] = this.verifyResult;
        }
        return properties;
    }
}
exports.default = VerifyActionResult;
//# sourceMappingURL=VerifyActionResult.js.map