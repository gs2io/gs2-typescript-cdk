"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Receipt {
    constructor(store, transactionID, payload, options = null) {
        this.store = store;
        this.transactionID = transactionID;
        this.payload = payload;
    }
    properties() {
        let properties = {};
        if (this.store != null) {
            properties["store"] = this.store;
        }
        if (this.transactionID != null) {
            properties["transactionID"] = this.transactionID;
        }
        if (this.payload != null) {
            properties["payload"] = this.payload;
        }
        return properties;
    }
}
exports.default = Receipt;
//# sourceMappingURL=Receipt.js.map