import { CdkResource, Stack } from "../../core/model";
import GlobalMessage from "./GlobalMessage";
export default class CurrentMasterData extends CdkResource {
    private version;
    private namespaceName;
    private readonly globalMessages;
    constructor(stack: Stack, namespaceName: string, globalMessages: GlobalMessage[]);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
