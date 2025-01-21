"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchResultPayload {
    constructor(requestId, statusCode, resultPayload, options = null) {
        this.requestId = requestId;
        this.statusCode = statusCode;
        this.resultPayload = resultPayload;
    }
    properties() {
        let properties = {};
        if (this.requestId != null) {
            properties["requestId"] = this.requestId;
        }
        if (this.statusCode != null) {
            properties["statusCode"] = this.statusCode;
        }
        if (this.resultPayload != null) {
            properties["resultPayload"] = this.resultPayload;
        }
        return properties;
    }
}
exports.default = BatchResultPayload;
//# sourceMappingURL=BatchResultPayload.js.map