"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdMob {
    constructor(allowAdUnitIds, options = null) {
        this.allowAdUnitIds = allowAdUnitIds;
    }
    properties() {
        let properties = {};
        if (this.allowAdUnitIds != null) {
            properties["allowAdUnitIds"] = this.allowAdUnitIds;
        }
        return properties;
    }
}
exports.default = AdMob;
//# sourceMappingURL=AdMob.js.map