"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BuffTargetModel {
    constructor(targetModelName, targetFieldName, conditionGrns, rate, options = null) {
        this.targetModelName = targetModelName;
        this.targetFieldName = targetFieldName;
        this.conditionGrns = conditionGrns;
        this.rate = rate;
    }
    properties() {
        let properties = {};
        if (this.targetModelName != null) {
            properties["targetModelName"] = this.targetModelName;
        }
        if (this.targetFieldName != null) {
            properties["targetFieldName"] = this.targetFieldName;
        }
        if (this.conditionGrns != null) {
            properties["conditionGrns"] = this.conditionGrns.map(v => v.properties());
        }
        if (this.rate != null) {
            properties["rate"] = this.rate;
        }
        return properties;
    }
}
exports.default = BuffTargetModel;
//# sourceMappingURL=BuffTargetModel.js.map