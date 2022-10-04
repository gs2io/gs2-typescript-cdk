import { CdkResource, Stack } from "../../core/model";
import Showcase from "./Showcase";
export default class CurrentMasterData extends CdkResource {
    private version;
    private namespaceName;
    private readonly showcases;
    constructor(stack: Stack, namespaceName: string, showcases: Showcase[]);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
