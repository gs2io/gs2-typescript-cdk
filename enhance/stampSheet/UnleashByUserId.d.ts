import { AcquireAction } from "../../core/model";
import UnleashMaterialSelection from "../model/UnleashMaterialSelection";
import { Config } from "../../core/model";
export default class UnleashByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly rateName;
    private readonly userId;
    private readonly targetItemSetId;
    private readonly materials;
    private readonly recipeName;
    private readonly recipeMaterials;
    private readonly config;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, rateName: string, targetItemSetId: string, materials?: string[] | null, recipeName?: string | null, recipeMaterials?: UnleashMaterialSelection[] | null, config?: Config[] | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
