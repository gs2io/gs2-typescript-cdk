"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Output {
    constructor(text, options = null) {
        var _a;
        this.revision = null;
        this.text = text;
        this.revision = (_a = options === null || options === void 0 ? void 0 : options.revision) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.text != null) {
            properties["text"] = this.text;
        }
        return properties;
    }
}
exports.default = Output;
//# sourceMappingURL=Output.js.map