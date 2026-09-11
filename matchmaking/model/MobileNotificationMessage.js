"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MobileNotificationMessage {
    constructor(options = null) {
        var _a, _b, _c;
        this.locale = null;
        this.title = null;
        this.message = null;
        this.locale = (_a = options === null || options === void 0 ? void 0 : options.locale) !== null && _a !== void 0 ? _a : null;
        this.title = (_b = options === null || options === void 0 ? void 0 : options.title) !== null && _b !== void 0 ? _b : null;
        this.message = (_c = options === null || options === void 0 ? void 0 : options.message) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.locale != null) {
            properties["locale"] = this.locale;
        }
        if (this.title != null) {
            properties["title"] = this.title;
        }
        if (this.message != null) {
            properties["message"] = this.message;
        }
        return properties;
    }
}
exports.default = MobileNotificationMessage;
//# sourceMappingURL=MobileNotificationMessage.js.map