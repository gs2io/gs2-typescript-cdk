import { CdkResource, Stack } from "../../core/model";
import Showcase from "./Showcase";
import RandomShowcase from "./RandomShowcase";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly showcases;
    private readonly randomShowcases;
    constructor(stack: Stack, namespaceName: string, showcases: Showcase[], randomShowcases: RandomShowcase[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
