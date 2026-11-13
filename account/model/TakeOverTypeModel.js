"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TakeOverTypeModelTakeOverMethod_1 = require("./enums/TakeOverTypeModelTakeOverMethod");
class TakeOverTypeModel {
    constructor(type, takeOverMethod, options = null) {
        var _a, _b, _c;
        this.metadata = null;
        this.openIdConnectSetting = null;
        this.issuedCodeSetting = null;
        this.type = type;
        this.takeOverMethod = takeOverMethod;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.openIdConnectSetting = (_b = options === null || options === void 0 ? void 0 : options.openIdConnectSetting) !== null && _b !== void 0 ? _b : null;
        this.issuedCodeSetting = (_c = options === null || options === void 0 ? void 0 : options.issuedCodeSetting) !== null && _c !== void 0 ? _c : null;
    }
    static takeOverMethodIsOpenIdConnect(type, openIdConnectSetting, options = null) {
        return new TakeOverTypeModel(type, TakeOverTypeModelTakeOverMethod_1.TakeOverTypeModelTakeOverMethod.OPEN_ID_CONNECT, {
            openIdConnectSetting: openIdConnectSetting,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
        });
    }
    static takeOverMethodIsIssuedCode(type, issuedCodeSetting, options = null) {
        return new TakeOverTypeModel(type, TakeOverTypeModelTakeOverMethod_1.TakeOverTypeModelTakeOverMethod.ISSUED_CODE, {
            issuedCodeSetting: issuedCodeSetting,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
        });
    }
    properties() {
        var _a, _b;
        let properties = {};
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.takeOverMethod != null) {
            properties["takeOverMethod"] = this.takeOverMethod;
        }
        if (this.openIdConnectSetting != null) {
            properties["openIdConnectSetting"] = (_a = this.openIdConnectSetting) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.issuedCodeSetting != null) {
            properties["issuedCodeSetting"] = (_b = this.issuedCodeSetting) === null || _b === void 0 ? void 0 : _b.properties();
        }
        return properties;
    }
}
exports.default = TakeOverTypeModel;
//# sourceMappingURL=TakeOverTypeModel.js.map