"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnleashRateEntryModelType_1 = require("./enums/UnleashRateEntryModelType");
class UnleashRateEntryModel {
    constructor(gradeValue, type, options = null) {
        var _a, _b;
        this.needCount = null;
        this.recipes = null;
        this.gradeValue = gradeValue;
        this.type = type;
        this.needCount = (_a = options === null || options === void 0 ? void 0 : options.needCount) !== null && _a !== void 0 ? _a : null;
        this.recipes = (_b = options === null || options === void 0 ? void 0 : options.recipes) !== null && _b !== void 0 ? _b : null;
    }
    static typeIsSimple(gradeValue, needCount, options = null) {
        return new UnleashRateEntryModel(gradeValue, UnleashRateEntryModelType_1.UnleashRateEntryModelType.SIMPLE, {
            needCount: needCount,
        });
    }
    static typeIsRecipe(gradeValue, recipes, options = null) {
        return new UnleashRateEntryModel(gradeValue, UnleashRateEntryModelType_1.UnleashRateEntryModelType.RECIPE, {
            recipes: recipes,
        });
    }
    properties() {
        let properties = {};
        if (this.gradeValue != null) {
            properties["gradeValue"] = this.gradeValue;
        }
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.needCount != null) {
            properties["needCount"] = this.needCount;
        }
        if (this.recipes != null) {
            properties["recipes"] = this.recipes.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = UnleashRateEntryModel;
//# sourceMappingURL=UnleashRateEntryModel.js.map