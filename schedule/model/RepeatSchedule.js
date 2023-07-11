"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RepeatSchedule {
    constructor(repeatCount, options = null) {
        var _a, _b, _c, _d;
        this.currentRepeatStartAt = null;
        this.currentRepeatEndAt = null;
        this.lastRepeatEndAt = null;
        this.nextRepeatStartAt = null;
        this.repeatCount = repeatCount;
        this.currentRepeatStartAt = (_a = options === null || options === void 0 ? void 0 : options.currentRepeatStartAt) !== null && _a !== void 0 ? _a : null;
        this.currentRepeatEndAt = (_b = options === null || options === void 0 ? void 0 : options.currentRepeatEndAt) !== null && _b !== void 0 ? _b : null;
        this.lastRepeatEndAt = (_c = options === null || options === void 0 ? void 0 : options.lastRepeatEndAt) !== null && _c !== void 0 ? _c : null;
        this.nextRepeatStartAt = (_d = options === null || options === void 0 ? void 0 : options.nextRepeatStartAt) !== null && _d !== void 0 ? _d : null;
    }
    properties() {
        let properties = {};
        if (this.repeatCount != null) {
            properties["repeatCount"] = this.repeatCount;
        }
        if (this.currentRepeatStartAt != null) {
            properties["currentRepeatStartAt"] = this.currentRepeatStartAt;
        }
        if (this.currentRepeatEndAt != null) {
            properties["currentRepeatEndAt"] = this.currentRepeatEndAt;
        }
        if (this.lastRepeatEndAt != null) {
            properties["lastRepeatEndAt"] = this.lastRepeatEndAt;
        }
        if (this.nextRepeatStartAt != null) {
            properties["nextRepeatStartAt"] = this.nextRepeatStartAt;
        }
        return properties;
    }
}
exports.default = RepeatSchedule;
//# sourceMappingURL=RepeatSchedule.js.map