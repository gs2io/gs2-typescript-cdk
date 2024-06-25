"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DepositEvent {
    constructor(slot, status, options = null) {
        var _a;
        this.depositTransactions = null;
        this.slot = slot;
        this.status = status;
        this.depositTransactions = (_a = options === null || options === void 0 ? void 0 : options.depositTransactions) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        var _a;
        let properties = {};
        if (this.slot != null) {
            properties["slot"] = this.slot;
        }
        if (this.depositTransactions != null) {
            properties["depositTransactions"] = this.depositTransactions.map(v => v.properties());
        }
        if (this.status != null) {
            properties["status"] = (_a = this.status) === null || _a === void 0 ? void 0 : _a.properties();
        }
        return properties;
    }
}
exports.default = DepositEvent;
//# sourceMappingURL=DepositEvent.js.map