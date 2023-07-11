"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor(options = null) {
        var _a, _b;
        this.contents = null;
        this.removeContents = null;
        this.contents = (_a = options === null || options === void 0 ? void 0 : options.contents) !== null && _a !== void 0 ? _a : null;
        this.removeContents = (_b = options === null || options === void 0 ? void 0 : options.removeContents) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.contents != null) {
            properties["contents"] = this.contents.map(v => v.properties());
        }
        if (this.removeContents != null) {
            properties["removeContents"] = this.removeContents.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = View;
//# sourceMappingURL=View.js.map