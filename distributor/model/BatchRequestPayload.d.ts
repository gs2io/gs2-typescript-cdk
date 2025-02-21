import { BatchRequestPayloadOptions } from "./options/BatchRequestPayloadOptions";
import { BatchRequestPayloadService } from "./enums/BatchRequestPayloadService";
export default class BatchRequestPayload {
    private readonly requestId;
    private readonly service;
    private readonly methodName;
    private readonly parameter;
    constructor(requestId: string, service: BatchRequestPayloadService, methodName: string, parameter: string, options?: BatchRequestPayloadOptions | null);
    properties(): {
        [name: string]: any;
    };
}
