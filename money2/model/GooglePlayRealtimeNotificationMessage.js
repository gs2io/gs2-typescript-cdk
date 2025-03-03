"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GooglePlayRealtimeNotificationMessage {
    constructor(data, messageId, publishTime, options = null) {
        this.data = data;
        this.messageId = messageId;
        this.publishTime = publishTime;
    }
    properties() {
        let properties = {};
        if (this.data != null) {
            properties["data"] = this.data;
        }
        if (this.messageId != null) {
            properties["messageId"] = this.messageId;
        }
        if (this.publishTime != null) {
            properties["publishTime"] = this.publishTime;
        }
        return properties;
    }
}
exports.default = GooglePlayRealtimeNotificationMessage;
//# sourceMappingURL=GooglePlayRealtimeNotificationMessage.js.map