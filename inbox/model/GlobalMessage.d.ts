import { GlobalMessageOptions } from "./options/GlobalMessageOptions";
export default class GlobalMessage {
    private readonly name;
    private readonly metadata;
    private readonly readAcquireActions;
    private readonly expiresTimeSpan;
    private readonly expiresAt;
    private readonly messageReceptionPeriodEventId;
    constructor(name: string, metadata: string, options?: GlobalMessageOptions | null);
    properties(): {
        [name: string]: any;
    };
}
