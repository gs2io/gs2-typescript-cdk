"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameResult {
    constructor(rank, userId, options = null) {
        this.rank = rank;
        this.userId = userId;
    }
    properties() {
        let properties = {};
        if (this.rank != null) {
            properties["rank"] = this.rank;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        return properties;
    }
}
exports.default = GameResult;
//# sourceMappingURL=GameResult.js.map