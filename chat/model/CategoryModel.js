"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CategoryModel {
    constructor(category, options = null) {
        var _a;
        this.rejectAccessTokenPost = null;
        this.category = category;
        this.rejectAccessTokenPost = (_a = options === null || options === void 0 ? void 0 : options.rejectAccessTokenPost) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.category != null) {
            properties["category"] = this.category;
        }
        if (this.rejectAccessTokenPost != null) {
            properties["rejectAccessTokenPost"] = this.rejectAccessTokenPost;
        }
        return properties;
    }
}
exports.default = CategoryModel;
//# sourceMappingURL=CategoryModel.js.map