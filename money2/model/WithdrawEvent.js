"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WithdrawEvent {
    constructor(slot, status, options = null) {
        var _a;
        this.withdrawDetails = null;
        this.slot = slot;
        this.status = status;
        this.withdrawDetails = (_a = options === null || options === void 0 ? void 0 : options.withdrawDetails) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        var _a;
        let properties = {};
        if (this.slot != null) {
            properties["slot"] = this.slot;
        }
        if (this.withdrawDetails != null) {
            properties["withdrawDetails"] = this.withdrawDetails.map(v => v.properties());
        }
        if (this.status != null) {
            properties["status"] = (_a = this.status) === null || _a === void 0 ? void 0 : _a.properties();
        }
        return properties;
    }
}
exports.default = WithdrawEvent;
//# sourceMappingURL=WithdrawEvent.js.map