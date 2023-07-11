"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Output {
    constructor(name, text, createdAt, options = null) {
        this.name = name;
        this.text = text;
        this.createdAt = createdAt;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.text != null) {
            properties["text"] = this.text;
        }
        if (this.createdAt != null) {
            properties["createdAt"] = this.createdAt;
        }
        return properties;
    }
}
exports.default = Output;
//# sourceMappingURL=Output.js.map