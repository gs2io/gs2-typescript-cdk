import { InGameLogOptions } from "./options/InGameLogOptions";
export default class InGameLog {
    private readonly timestamp;
    private readonly requestId;
    private readonly payload;
    private readonly userId;
    private readonly tags;
    constructor(timestamp: number, requestId: string, payload: string, options?: InGameLogOptions | null);
    properties(): {
        [name: string]: any;
    };
}
