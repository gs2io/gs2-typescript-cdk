import { EmitEventOptions } from "./options/EmitEventOptions";
export default class EmitEvent {
    private readonly event;
    private readonly parameters;
    private readonly timestamp;
    constructor(event: string, parameters: string, timestamp: number, options?: EmitEventOptions | null);
    properties(): {
        [name: string]: any;
    };
}
