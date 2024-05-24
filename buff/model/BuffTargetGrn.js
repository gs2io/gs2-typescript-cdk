"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BuffTargetGrn {
    constructor(targetModelName, targetGrn, options = null) {
        this.targetModelName = targetModelName;
        this.targetGrn = targetGrn;
    }
    properties() {
        let properties = {};
        if (this.targetModelName != null) {
            properties["targetModelName"] = this.targetModelName;
        }
        if (this.targetGrn != null) {
            properties["targetGrn"] = this.targetGrn;
        }
        return properties;
    }
}
exports.default = BuffTargetGrn;
//# sourceMappingURL=BuffTargetGrn.js.map