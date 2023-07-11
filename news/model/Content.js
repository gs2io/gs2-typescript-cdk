"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    constructor(section, content, frontMatter, options = null) {
        this.section = section;
        this.content = content;
        this.frontMatter = frontMatter;
    }
    properties() {
        let properties = {};
        if (this.section != null) {
            properties["section"] = this.section;
        }
        if (this.content != null) {
            properties["content"] = this.content;
        }
        if (this.frontMatter != null) {
            properties["frontMatter"] = this.frontMatter;
        }
        return properties;
    }
}
exports.default = Content;
//# sourceMappingURL=Content.js.map