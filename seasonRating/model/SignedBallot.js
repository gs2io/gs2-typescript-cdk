"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SignedBallot {
    constructor(body, signature, options = null) {
        this.body = body;
        this.signature = signature;
    }
    properties() {
        let properties = {};
        if (this.body != null) {
            properties["body"] = this.body;
        }
        if (this.signature != null) {
            properties["signature"] = this.signature;
        }
        return properties;
    }
}
exports.default = SignedBallot;
//# sourceMappingURL=SignedBallot.js.map