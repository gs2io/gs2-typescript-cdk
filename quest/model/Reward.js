"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reward {
    constructor(action, request, itemId, value, options = null) {
        this.action = action;
        this.request = request;
        this.itemId = itemId;
        this.value = value;
    }
    properties() {
        let properties = {};
        if (this.action != null) {
            properties["action"] = this.action;
        }
        if (this.request != null) {
            properties["request"] = this.request;
        }
        if (this.itemId != null) {
            properties["itemId"] = this.itemId;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }
        return properties;
    }
}
exports.default = Reward;
//# sourceMappingURL=Reward.js.map