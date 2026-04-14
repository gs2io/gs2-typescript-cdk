"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetricModel {
    constructor(name, type, options = null) {
        var _a;
        this.labels = null;
        this.name = name;
        this.type = type;
        this.labels = (_a = options === null || options === void 0 ? void 0 : options.labels) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.labels != null) {
            properties["labels"] = this.labels;
        }
        return properties;
    }
}
exports.default = MetricModel;
//# sourceMappingURL=MetricModel.js.map