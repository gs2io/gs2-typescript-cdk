"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GitHubApiKey {
    constructor(name, apiKey, encryptionKeyName, options = null) {
        var _a, _b;
        this.description = null;
        this.revision = null;
        this.name = name;
        this.apiKey = apiKey;
        this.encryptionKeyName = encryptionKeyName;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.revision = (_b = options === null || options === void 0 ? void 0 : options.revision) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.description != null) {
            properties["description"] = this.description;
        }
        if (this.apiKey != null) {
            properties["apiKey"] = this.apiKey;
        }
        if (this.encryptionKeyName != null) {
            properties["encryptionKeyName"] = this.encryptionKeyName;
        }
        return properties;
    }
}
exports.default = GitHubApiKey;
//# sourceMappingURL=GitHubApiKey.js.map