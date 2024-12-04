import { AcquireActionResultOptions } from "./options/AcquireActionResultOptions";
export default class AcquireActionResult {
    private readonly action;
    private readonly acquireRequest;
    private readonly statusCode;
    private readonly acquireResult;
    constructor(action: string, acquireRequest: string, options?: AcquireActionResultOptions | null);
    properties(): {
        [name: string]: any;
    };
}
