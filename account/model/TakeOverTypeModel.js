"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakeOverTypeModel {
    constructor(type, openIdConnectSetting, options = null) {
        var _a;
        this.metadata = null;
        this.type = type;
        this.openIdConnectSetting = openIdConnectSetting;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        var _a;
        let properties = {};
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.openIdConnectSetting != null) {
            properties["openIdConnectSetting"] = (_a = this.openIdConnectSetting) === null || _a === void 0 ? void 0 : _a.properties();
        }
        return properties;
    }
}
exports.default = TakeOverTypeModel;
//# sourceMappingURL=TakeOverTypeModel.js.map