"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JobResultBody {
    constructor(tryNumber, statusCode, result, tryAt, options = null) {
        this.tryNumber = tryNumber;
        this.statusCode = statusCode;
        this.result = result;
        this.tryAt = tryAt;
    }
    properties() {
        let properties = {};
        if (this.tryNumber != null) {
            properties["tryNumber"] = this.tryNumber;
        }
        if (this.statusCode != null) {
            properties["statusCode"] = this.statusCode;
        }
        if (this.result != null) {
            properties["result"] = this.result;
        }
        if (this.tryAt != null) {
            properties["tryAt"] = this.tryAt;
        }
        return properties;
    }
}
exports.default = JobResultBody;
//# sourceMappingURL=JobResultBody.js.map