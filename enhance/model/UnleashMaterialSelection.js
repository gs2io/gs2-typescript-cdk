"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnleashMaterialSelection {
    constructor(name, itemSetIds, options = null) {
        this.name = name;
        this.itemSetIds = itemSetIds;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.itemSetIds != null) {
            properties["itemSetIds"] = this.itemSetIds;
        }
        return properties;
    }
}
exports.default = UnleashMaterialSelection;
//# sourceMappingURL=UnleashMaterialSelection.js.map