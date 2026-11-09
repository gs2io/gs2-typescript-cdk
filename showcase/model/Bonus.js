"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bonus {
    constructor(routeKey, acquireActions, options = null) {
        this.routeKey = routeKey;
        this.acquireActions = acquireActions;
    }
    properties() {
        let properties = {};
        if (this.routeKey != null) {
            properties["routeKey"] = this.routeKey;
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = Bonus;
//# sourceMappingURL=Bonus.js.map