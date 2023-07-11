"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoldModel {
    constructor(name, initialMaxCapacity, maxCapacity, formModel, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.initialMaxCapacity = initialMaxCapacity;
        this.maxCapacity = maxCapacity;
        this.formModel = formModel;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        var _a;
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.initialMaxCapacity != null) {
            properties["initialMaxCapacity"] = this.initialMaxCapacity;
        }
        if (this.maxCapacity != null) {
            properties["maxCapacity"] = this.maxCapacity;
        }
        if (this.formModel != null) {
            properties["formModel"] = (_a = this.formModel) === null || _a === void 0 ? void 0 : _a.properties();
        }
        return properties;
    }
}
exports.default = MoldModel;
//# sourceMappingURL=MoldModel.js.map