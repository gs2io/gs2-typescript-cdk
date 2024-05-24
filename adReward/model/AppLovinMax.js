"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppLovinMax {
    constructor(allowAdUnitId, eventKey, options = null) {
        this.allowAdUnitId = allowAdUnitId;
        this.eventKey = eventKey;
    }
    properties() {
        let properties = {};
        if (this.allowAdUnitId != null) {
            properties["allowAdUnitId"] = this.allowAdUnitId;
        }
        if (this.eventKey != null) {
            properties["eventKey"] = this.eventKey;
        }
        return properties;
    }
}
exports.default = AppLovinMax;
//# sourceMappingURL=AppLovinMax.js.map