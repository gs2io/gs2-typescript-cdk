"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubscribeTransaction {
    constructor(contentName, transactionId, store, statusDetail, expiresAt, options = null) {
        var _a, _b, _c, _d;
        this.userId = null;
        this.lastAllocatedAt = null;
        this.lastTakeOverAt = null;
        this.revision = null;
        this.contentName = contentName;
        this.transactionId = transactionId;
        this.store = store;
        this.statusDetail = statusDetail;
        this.expiresAt = expiresAt;
        this.userId = (_a = options === null || options === void 0 ? void 0 : options.userId) !== null && _a !== void 0 ? _a : null;
        this.lastAllocatedAt = (_b = options === null || options === void 0 ? void 0 : options.lastAllocatedAt) !== null && _b !== void 0 ? _b : null;
        this.lastTakeOverAt = (_c = options === null || options === void 0 ? void 0 : options.lastTakeOverAt) !== null && _c !== void 0 ? _c : null;
        this.revision = (_d = options === null || options === void 0 ? void 0 : options.revision) !== null && _d !== void 0 ? _d : null;
    }
    properties() {
        let properties = {};
        if (this.contentName != null) {
            properties["contentName"] = this.contentName;
        }
        if (this.transactionId != null) {
            properties["transactionId"] = this.transactionId;
        }
        if (this.store != null) {
            properties["store"] = this.store;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.statusDetail != null) {
            properties["statusDetail"] = this.statusDetail;
        }
        if (this.expiresAt != null) {
            properties["expiresAt"] = this.expiresAt;
        }
        if (this.lastAllocatedAt != null) {
            properties["lastAllocatedAt"] = this.lastAllocatedAt;
        }
        if (this.lastTakeOverAt != null) {
            properties["lastTakeOverAt"] = this.lastTakeOverAt;
        }
        return properties;
    }
}
exports.default = SubscribeTransaction;
//# sourceMappingURL=SubscribeTransaction.js.map