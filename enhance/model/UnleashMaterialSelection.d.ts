import { UnleashMaterialSelectionOptions } from "./options/UnleashMaterialSelectionOptions";
export default class UnleashMaterialSelection {
    private readonly name;
    private readonly itemSetIds;
    constructor(name: string, itemSetIds: string[], options?: UnleashMaterialSelectionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
