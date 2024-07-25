"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeModel {
    constructor(name, releaseConsumeActions, restrainReturnRate, options = null) {
        var _a, _b, _c, _d;
        this.metadata = null;
        this.releaseVerifyActions = null;
        this.returnAcquireActions = null;
        this.premiseNodeNames = null;
        this.name = name;
        this.releaseConsumeActions = releaseConsumeActions;
        this.restrainReturnRate = restrainReturnRate;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.releaseVerifyActions = (_b = options === null || options === void 0 ? void 0 : options.releaseVerifyActions) !== null && _b !== void 0 ? _b : null;
        this.returnAcquireActions = (_c = options === null || options === void 0 ? void 0 : options.returnAcquireActions) !== null && _c !== void 0 ? _c : null;
        this.premiseNodeNames = (_d = options === null || options === void 0 ? void 0 : options.premiseNodeNames) !== null && _d !== void 0 ? _d : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.releaseVerifyActions != null) {
            properties["releaseVerifyActions"] = this.releaseVerifyActions.map(v => v.properties());
        }
        if (this.releaseConsumeActions != null) {
            properties["releaseConsumeActions"] = this.releaseConsumeActions.map(v => v.properties());
        }
        if (this.restrainReturnRate != null) {
            properties["restrainReturnRate"] = this.restrainReturnRate;
        }
        if (this.premiseNodeNames != null) {
            properties["premiseNodeNames"] = this.premiseNodeNames;
        }
        return properties;
    }
}
exports.default = NodeModel;
//# sourceMappingURL=NodeModel.js.map