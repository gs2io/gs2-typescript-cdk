"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserDataEntry {
    constructor(service, namespaceName, kind, payload, options = null) {
        this.service = service;
        this.namespaceName = namespaceName;
        this.kind = kind;
        this.payload = payload;
    }
    properties() {
        let properties = {};
        if (this.service != null) {
            properties["service"] = this.service;
        }
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.kind != null) {
            properties["kind"] = this.kind;
        }
        if (this.payload != null) {
            properties["payload"] = this.payload;
        }
        return properties;
    }
}
exports.default = UserDataEntry;
//# sourceMappingURL=UserDataEntry.js.map