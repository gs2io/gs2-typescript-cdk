"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SerialKeyStatus_1 = require("./enums/SerialKeyStatus");
class SerialKey {
    constructor(campaignModelName, code, status, createdAt, updatedAt, options = null) {
        var _a, _b, _c;
        this.metadata = null;
        this.usedUserId = null;
        this.usedAt = null;
        this.campaignModelName = campaignModelName;
        this.code = code;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.usedUserId = (_b = options === null || options === void 0 ? void 0 : options.usedUserId) !== null && _b !== void 0 ? _b : null;
        this.usedAt = (_c = options === null || options === void 0 ? void 0 : options.usedAt) !== null && _c !== void 0 ? _c : null;
    }
    static statusIsActive(campaignModelName, code, createdAt, updatedAt, options = null) {
        return new SerialKey(campaignModelName, code, SerialKeyStatus_1.SerialKeyStatus.ACTIVE, createdAt, updatedAt, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            usedAt: options === null || options === void 0 ? void 0 : options.usedAt,
        });
    }
    static statusIsUsed(campaignModelName, code, createdAt, updatedAt, usedUserId, options = null) {
        return new SerialKey(campaignModelName, code, SerialKeyStatus_1.SerialKeyStatus.USED, createdAt, updatedAt, {
            usedUserId: usedUserId,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            usedAt: options === null || options === void 0 ? void 0 : options.usedAt,
        });
    }
    static statusIsInactive(campaignModelName, code, createdAt, updatedAt, options = null) {
        return new SerialKey(campaignModelName, code, SerialKeyStatus_1.SerialKeyStatus.INACTIVE, createdAt, updatedAt, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            usedAt: options === null || options === void 0 ? void 0 : options.usedAt,
        });
    }
    properties() {
        let properties = {};
        if (this.campaignModelName != null) {
            properties["campaignModelName"] = this.campaignModelName;
        }
        if (this.code != null) {
            properties["code"] = this.code;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.status != null) {
            properties["status"] = this.status;
        }
        if (this.usedUserId != null) {
            properties["usedUserId"] = this.usedUserId;
        }
        if (this.createdAt != null) {
            properties["createdAt"] = this.createdAt;
        }
        if (this.usedAt != null) {
            properties["usedAt"] = this.usedAt;
        }
        if (this.updatedAt != null) {
            properties["updatedAt"] = this.updatedAt;
        }
        return properties;
    }
}
exports.default = SerialKey;
//# sourceMappingURL=SerialKey.js.map