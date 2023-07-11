import { CdkResource, Stack } from "../../core/model";
import Event from "./Event";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly events;
    constructor(stack: Stack, namespaceName: string, events: Event[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
