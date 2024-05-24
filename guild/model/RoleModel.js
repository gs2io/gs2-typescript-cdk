"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoleModel {
    constructor(name, policyDocument, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.policyDocument = policyDocument;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.policyDocument != null) {
            properties["policyDocument"] = this.policyDocument;
        }
        return properties;
    }
}
exports.default = RoleModel;
//# sourceMappingURL=RoleModel.js.map