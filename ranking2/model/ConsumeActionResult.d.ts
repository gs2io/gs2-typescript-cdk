import { ConsumeActionResultOptions } from "./options/ConsumeActionResultOptions";
export default class ConsumeActionResult {
    private readonly action;
    private readonly consumeRequest;
    private readonly statusCode;
    private readonly consumeResult;
    constructor(action: string, consumeRequest: string, options?: ConsumeActionResultOptions | null);
    properties(): {
        [name: string]: any;
    };
}
