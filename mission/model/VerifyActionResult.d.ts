import { VerifyActionResultOptions } from "./options/VerifyActionResultOptions";
export default class VerifyActionResult {
    private readonly action;
    private readonly verifyRequest;
    private readonly statusCode;
    private readonly verifyResult;
    constructor(action: string, verifyRequest: string, options?: VerifyActionResultOptions | null);
    properties(): {
        [name: string]: any;
    };
}
