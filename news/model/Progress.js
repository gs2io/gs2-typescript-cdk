"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Progress {
    constructor(uploadToken, generated, patternCount, createdAt, updatedAt, options = null) {
        this.uploadToken = uploadToken;
        this.generated = generated;
        this.patternCount = patternCount;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
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
        if (this.createdAt != null) {
            properties["createdAt"] = this.createdAt;
        }
        if (this.updatedAt != null) {
            properties["updatedAt"] = this.updatedAt;
        }
        return properties;
    }
}
exports.default = Progress;
//# sourceMappingURL=Progress.js.map