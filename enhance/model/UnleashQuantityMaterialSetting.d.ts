import { UnleashQuantityMaterialSettingOptions } from "./options/UnleashQuantityMaterialSettingOptions";
import { UnleashQuantityMaterialSettingMatchTypeIsSameGroupOptions } from "./options/UnleashQuantityMaterialSettingMatchTypeIsSameGroupOptions";
import { UnleashQuantityMaterialSettingMatchTypeIsSpecifiedOptions } from "./options/UnleashQuantityMaterialSettingMatchTypeIsSpecifiedOptions";
import { UnleashQuantityMaterialSettingMatchType } from "./enums/UnleashQuantityMaterialSettingMatchType";
export default class UnleashQuantityMaterialSetting {
    private readonly matchType;
    private readonly count;
    private readonly materialInventoryModelId;
    private readonly itemModelId;
    constructor(matchType: UnleashQuantityMaterialSettingMatchType, count: number, options?: UnleashQuantityMaterialSettingOptions | null);
    static matchTypeIsSameGroup(count: number, materialInventoryModelId: string, options?: UnleashQuantityMaterialSettingMatchTypeIsSameGroupOptions | null): UnleashQuantityMaterialSetting;
    static matchTypeIsSpecified(count: number, itemModelId: string, options?: UnleashQuantityMaterialSettingMatchTypeIsSpecifiedOptions | null): UnleashQuantityMaterialSetting;
    properties(): {
        [name: string]: any;
    };
}
