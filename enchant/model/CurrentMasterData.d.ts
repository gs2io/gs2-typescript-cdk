import { CdkResource, Stack } from "../../core/model";
import BalanceParameterModel from "./BalanceParameterModel";
import RarityParameterModel from "./RarityParameterModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly balanceParameterModels;
    private readonly rarityParameterModels;
    constructor(stack: Stack, namespaceName: string, balanceParameterModels: BalanceParameterModel[], rarityParameterModels: RarityParameterModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
