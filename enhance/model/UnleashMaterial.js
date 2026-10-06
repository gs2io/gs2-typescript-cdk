"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnleashMaterialMaterialType_1 = require("./enums/UnleashMaterialMaterialType");
class UnleashMaterial {
    constructor(name, materialType, options = null) {
        var _a, _b;
        this.individualSetting = null;
        this.quantitySetting = null;
        this.name = name;
        this.materialType = materialType;
        this.individualSetting = (_a = options === null || options === void 0 ? void 0 : options.individualSetting) !== null && _a !== void 0 ? _a : null;
        this.quantitySetting = (_b = options === null || options === void 0 ? void 0 : options.quantitySetting) !== null && _b !== void 0 ? _b : null;
    }
    static materialTypeIsIndividual(name, individualSetting, options = null) {
        return new UnleashMaterial(name, UnleashMaterialMaterialType_1.UnleashMaterialMaterialType.INDIVIDUAL, {
            individualSetting: individualSetting,
        });
    }
    static materialTypeIsQuantity(name, quantitySetting, options = null) {
        return new UnleashMaterial(name, UnleashMaterialMaterialType_1.UnleashMaterialMaterialType.QUANTITY, {
            quantitySetting: quantitySetting,
        });
    }
    properties() {
        var _a, _b;
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.materialType != null) {
            properties["materialType"] = this.materialType;
        }
        if (this.individualSetting != null) {
            properties["individualSetting"] = (_a = this.individualSetting) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.quantitySetting != null) {
            properties["quantitySetting"] = (_b = this.quantitySetting) === null || _b === void 0 ? void 0 : _b.properties();
        }
        return properties;
    }
}
exports.default = UnleashMaterial;
//# sourceMappingURL=UnleashMaterial.js.map