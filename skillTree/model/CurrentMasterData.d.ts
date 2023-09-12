import { CdkResource, Stack } from "../../core/model";
import NodeModel from "./NodeModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly nodeModels;
    constructor(stack: Stack, namespaceName: string, nodeModels: NodeModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
