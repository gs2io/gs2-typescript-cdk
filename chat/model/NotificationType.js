"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotificationType {
    constructor(category, enableTransferMobilePushNotification, options = null) {
        this.category = category;
        this.enableTransferMobilePushNotification = enableTransferMobilePushNotification;
    }
    properties() {
        let properties = {};
        if (this.category != null) {
            properties["category"] = this.category;
        }
        if (this.enableTransferMobilePushNotification != null) {
            properties["enableTransferMobilePushNotification"] = this.enableTransferMobilePushNotification;
        }
        return properties;
    }
}
exports.default = NotificationType;
//# sourceMappingURL=NotificationType.js.map