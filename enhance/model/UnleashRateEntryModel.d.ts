import UnleashRecipe from "./UnleashRecipe";
import { UnleashRateEntryModelOptions } from "./options/UnleashRateEntryModelOptions";
import { UnleashRateEntryModelTypeIsSimpleOptions } from "./options/UnleashRateEntryModelTypeIsSimpleOptions";
import { UnleashRateEntryModelTypeIsRecipeOptions } from "./options/UnleashRateEntryModelTypeIsRecipeOptions";
import { UnleashRateEntryModelType } from "./enums/UnleashRateEntryModelType";
export default class UnleashRateEntryModel {
    private readonly gradeValue;
    private readonly type;
    private readonly needCount;
    private readonly recipes;
    constructor(gradeValue: number, type: UnleashRateEntryModelType, options?: UnleashRateEntryModelOptions | null);
    static typeIsSimple(gradeValue: number, needCount: number, options?: UnleashRateEntryModelTypeIsSimpleOptions | null): UnleashRateEntryModel;
    static typeIsRecipe(gradeValue: number, recipes: UnleashRecipe[], options?: UnleashRateEntryModelTypeIsRecipeOptions | null): UnleashRateEntryModel;
    properties(): {
        [name: string]: any;
    };
}
