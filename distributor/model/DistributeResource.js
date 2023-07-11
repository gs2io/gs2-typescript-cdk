"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DistributeResource {
    constructor(action, request, options = null) {
        this.action = action;
        this.request = request;
    }
    properties() {
        let properties = {};
        if (this.action != null) {
            properties["action"] = this.action;
        }
        if (this.request != null) {
            properties["request"] = this.request;
        }
        return properties;
    }
}
exports.default = DistributeResource;
//# sourceMappingURL=DistributeResource.js.map