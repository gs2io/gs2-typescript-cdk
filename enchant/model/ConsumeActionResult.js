"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsumeActionResult {
    constructor(action, consumeRequest, options = null) {
        var _a, _b;
        this.statusCode = null;
        this.consumeResult = null;
        this.action = action;
        this.consumeRequest = consumeRequest;
        this.statusCode = (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : null;
        this.consumeResult = (_b = options === null || options === void 0 ? void 0 : options.consumeResult) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.action != null) {
            properties["action"] = this.action;
        }
        if (this.consumeRequest != null) {
            properties["consumeRequest"] = this.consumeRequest;
        }
        if (this.statusCode != null) {
            properties["statusCode"] = this.statusCode;
        }
        if (this.consumeResult != null) {
            properties["consumeResult"] = this.consumeResult;
        }
        return properties;
    }
}
exports.default = ConsumeActionResult;
//# sourceMappingURL=ConsumeActionResult.js.map