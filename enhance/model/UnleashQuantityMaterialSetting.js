"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnleashQuantityMaterialSettingMatchType_1 = require("./enums/UnleashQuantityMaterialSettingMatchType");
class UnleashQuantityMaterialSetting {
    constructor(matchType, count, options = null) {
        var _a, _b;
        this.materialInventoryModelId = null;
        this.itemModelId = null;
        this.matchType = matchType;
        this.count = count;
        this.materialInventoryModelId = (_a = options === null || options === void 0 ? void 0 : options.materialInventoryModelId) !== null && _a !== void 0 ? _a : null;
        this.itemModelId = (_b = options === null || options === void 0 ? void 0 : options.itemModelId) !== null && _b !== void 0 ? _b : null;
    }
    static matchTypeIsSameGroup(count, materialInventoryModelId, options = null) {
        return new UnleashQuantityMaterialSetting(UnleashQuantityMaterialSettingMatchType_1.UnleashQuantityMaterialSettingMatchType.SAME_GROUP, count, {
            materialInventoryModelId: materialInventoryModelId,
        });
    }
    static matchTypeIsSpecified(count, itemModelId, options = null) {
        return new UnleashQuantityMaterialSetting(UnleashQuantityMaterialSettingMatchType_1.UnleashQuantityMaterialSettingMatchType.SPECIFIED, count, {
            itemModelId: itemModelId,
        });
    }
    properties() {
        let properties = {};
        if (this.matchType != null) {
            properties["matchType"] = this.matchType;
        }
        if (this.materialInventoryModelId != null) {
            properties["materialInventoryModelId"] = this.materialInventoryModelId;
        }
        if (this.itemModelId != null) {
            properties["itemModelId"] = this.itemModelId;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        return properties;
    }
}
exports.default = UnleashQuantityMaterialSetting;
//# sourceMappingURL=UnleashQuantityMaterialSetting.js.map