import UnleashIndividualMaterialSetting from "./UnleashIndividualMaterialSetting";
import UnleashQuantityMaterialSetting from "./UnleashQuantityMaterialSetting";
import { UnleashMaterialOptions } from "./options/UnleashMaterialOptions";
import { UnleashMaterialMaterialTypeIsIndividualOptions } from "./options/UnleashMaterialMaterialTypeIsIndividualOptions";
import { UnleashMaterialMaterialTypeIsQuantityOptions } from "./options/UnleashMaterialMaterialTypeIsQuantityOptions";
import { UnleashMaterialMaterialType } from "./enums/UnleashMaterialMaterialType";
export default class UnleashMaterial {
    private readonly name;
    private readonly materialType;
    private readonly individualSetting;
    private readonly quantitySetting;
    constructor(name: string, materialType: UnleashMaterialMaterialType, options?: UnleashMaterialOptions | null);
    static materialTypeIsIndividual(name: string, individualSetting: UnleashIndividualMaterialSetting, options?: UnleashMaterialMaterialTypeIsIndividualOptions | null): UnleashMaterial;
    static materialTypeIsQuantity(name: string, quantitySetting: UnleashQuantityMaterialSetting, options?: UnleashMaterialMaterialTypeIsQuantityOptions | null): UnleashMaterial;
    properties(): {
        [name: string]: any;
    };
}
