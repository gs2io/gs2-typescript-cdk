"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Output {
    constructor(text, options = null) {
        this.text = text;
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