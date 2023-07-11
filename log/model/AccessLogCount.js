"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccessLogCount {
    constructor(count, options = null) {
        var _a, _b, _c;
        this.service = null;
        this.method = null;
        this.userId = null;
        this.count = count;
        this.service = (_a = options === null || options === void 0 ? void 0 : options.service) !== null && _a !== void 0 ? _a : null;
        this.method = (_b = options === null || options === void 0 ? void 0 : options.method) !== null && _b !== void 0 ? _b : null;
        this.userId = (_c = options === null || options === void 0 ? void 0 : options.userId) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.service != null) {
            properties["service"] = this.service;
        }
        if (this.method != null) {
            properties["method"] = this.method;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        return properties;
    }
}
exports.default = AccessLogCount;
//# sourceMappingURL=AccessLogCount.js.map