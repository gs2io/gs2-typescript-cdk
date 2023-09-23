"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BanStatus {
    constructor(reason, releaseTimestamp, options = null) {
        this.reason = reason;
        this.releaseTimestamp = releaseTimestamp;
    }
    properties() {
        let properties = {};
        if (this.reason != null) {
            properties["reason"] = this.reason;
        }
        if (this.releaseTimestamp != null) {
            properties["releaseTimestamp"] = this.releaseTimestamp;
        }
        return properties;
    }
}
exports.default = BanStatus;
//# sourceMappingURL=BanStatus.js.map