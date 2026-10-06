import UnleashMaterial from "./UnleashMaterial";
import { UnleashRecipeOptions } from "./options/UnleashRecipeOptions";
export default class UnleashRecipe {
    private readonly name;
    private readonly materials;
    private readonly metadata;
    private readonly targetGroupKeys;
    constructor(name: string, materials: UnleashMaterial[], options?: UnleashRecipeOptions | null);
    properties(): {
        [name: string]: any;
    };
}
