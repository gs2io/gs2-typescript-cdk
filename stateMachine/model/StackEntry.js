"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StackEntry {
    constructor(stateMachineName, taskName, options = null) {
        this.stateMachineName = stateMachineName;
        this.taskName = taskName;
    }
    properties() {
        let properties = {};
        if (this.stateMachineName != null) {
            properties["stateMachineName"] = this.stateMachineName;
        }
        if (this.taskName != null) {
            properties["taskName"] = this.taskName;
        }
        return properties;
    }
}
exports.default = StackEntry;
//# sourceMappingURL=StackEntry.js.map