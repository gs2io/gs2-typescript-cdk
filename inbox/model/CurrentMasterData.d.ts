import { CdkResource, Stack } from "../../core/model";
import GlobalMessage from "./GlobalMessage";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly globalMessages;
    constructor(stack: Stack, namespaceName: string, globalMessages: GlobalMessage[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
