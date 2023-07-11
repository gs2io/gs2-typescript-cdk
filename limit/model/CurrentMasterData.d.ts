import { CdkResource, Stack } from "../../core/model";
import LimitModel from "./LimitModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly limitModels;
    constructor(stack: Stack, namespaceName: string, limitModels: LimitModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
