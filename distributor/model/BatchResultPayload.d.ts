import { BatchResultPayloadOptions } from "./options/BatchResultPayloadOptions";
export default class BatchResultPayload {
    private readonly requestId;
    private readonly statusCode;
    private readonly resultPayload;
    constructor(requestId: string, statusCode: number, resultPayload: string, options?: BatchResultPayloadOptions | null);
    properties(): {
        [name: string]: any;
    };
}
