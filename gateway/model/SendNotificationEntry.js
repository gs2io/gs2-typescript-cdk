"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendNotificationEntry {
    constructor(userId, issuer, subject, payload, enableTransferMobileNotification, options = null) {
        var _a;
        this.sound = null;
        this.userId = userId;
        this.issuer = issuer;
        this.subject = subject;
        this.payload = payload;
        this.enableTransferMobileNotification = enableTransferMobileNotification;
        this.sound = (_a = options === null || options === void 0 ? void 0 : options.sound) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.issuer != null) {
            properties["issuer"] = this.issuer;
        }
        if (this.subject != null) {
            properties["subject"] = this.subject;
        }
        if (this.payload != null) {
            properties["payload"] = this.payload;
        }
        if (this.enableTransferMobileNotification != null) {
            properties["enableTransferMobileNotification"] = this.enableTransferMobileNotification;
        }
        if (this.sound != null) {
            properties["sound"] = this.sound;
        }
        return properties;
    }
}
exports.default = SendNotificationEntry;
//# sourceMappingURL=SendNotificationEntry.js.map