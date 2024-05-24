"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BuffTargetAction {
    constructor(targetActionName, targetFieldName, conditionGrns, rate, options = null) {
        this.targetActionName = targetActionName;
        this.targetFieldName = targetFieldName;
        this.conditionGrns = conditionGrns;
        this.rate = rate;
    }
    properties() {
        let properties = {};
        if (this.targetActionName != null) {
            properties["targetActionName"] = this.targetActionName;
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
exports.default = BuffTargetAction;
//# sourceMappingURL=BuffTargetAction.js.map