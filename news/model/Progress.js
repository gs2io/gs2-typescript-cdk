"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Progress {
    constructor(uploadToken, generated, patternCount, options = null) {
        var _a;
        this.revision = null;
        this.uploadToken = uploadToken;
        this.generated = generated;
        this.patternCount = patternCount;
        this.revision = (_a = options === null || options === void 0 ? void 0 : options.revision) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.uploadToken != null) {
            properties["uploadToken"] = this.uploadToken;
        }
        if (this.generated != null) {
            properties["generated"] = this.generated;
        }
        if (this.patternCount != null) {
            properties["patternCount"] = this.patternCount;
        }
        return properties;
    }
}
exports.default = Progress;
//# sourceMappingURL=Progress.js.map