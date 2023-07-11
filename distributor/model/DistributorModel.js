"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DistributorModel {
    constructor(name, options = null) {
        var _a, _b, _c;
        this.metadata = null;
        this.inboxNamespaceId = null;
        this.whiteListTargetIds = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.inboxNamespaceId = (_b = options === null || options === void 0 ? void 0 : options.inboxNamespaceId) !== null && _b !== void 0 ? _b : null;
        this.whiteListTargetIds = (_c = options === null || options === void 0 ? void 0 : options.whiteListTargetIds) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.inboxNamespaceId != null) {
            properties["inboxNamespaceId"] = this.inboxNamespaceId;
        }
        if (this.whiteListTargetIds != null) {
            properties["whiteListTargetIds"] = this.whiteListTargetIds;
        }
        return properties;
    }
}
exports.default = DistributorModel;
//# sourceMappingURL=DistributorModel.js.map