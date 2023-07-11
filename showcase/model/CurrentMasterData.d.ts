import { CdkResource, Stack } from "../../core/model";
import Showcase from "./Showcase";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly showcases;
    constructor(stack: Stack, namespaceName: string, showcases: Showcase[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
