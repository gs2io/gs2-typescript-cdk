"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RecoverIntervalTable {
    constructor(name, experienceModelId, values, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.experienceModelId = experienceModelId;
        this.values = values;
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
        if (this.experienceModelId != null) {
            properties["experienceModelId"] = this.experienceModelId;
        }
        if (this.values != null) {
            properties["values"] = this.values;
        }
        return properties;
    }
}
exports.default = RecoverIntervalTable;
//# sourceMappingURL=RecoverIntervalTable.js.map