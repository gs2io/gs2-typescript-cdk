"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reward {
    constructor(acquireActions, options = null) {
        this.acquireActions = acquireActions;
    }
    properties() {
        let properties = {};
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = Reward;
//# sourceMappingURL=Reward.js.map