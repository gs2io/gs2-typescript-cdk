import UnleashIndividualMaterialSetting from "../UnleashIndividualMaterialSetting";
import UnleashQuantityMaterialSetting from "../UnleashQuantityMaterialSetting";
export interface UnleashMaterialOptions {
    individualSetting?: UnleashIndividualMaterialSetting | null;
    quantitySetting?: UnleashQuantityMaterialSetting | null;
}
