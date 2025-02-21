import { AccessLogWithTelemetryOptions } from "./options/AccessLogWithTelemetryOptions";
import { AccessLogWithTelemetryStatus } from "./enums/AccessLogWithTelemetryStatus";
export default class AccessLogWithTelemetry {
    private readonly timestamp;
    private readonly sourceRequestId;
    private readonly requestId;
    private readonly duration;
    private readonly service;
    private readonly method;
    private readonly request;
    private readonly result;
    private readonly status;
    private readonly userId;
    constructor(timestamp: number, sourceRequestId: string, requestId: string, duration: number, service: string, method: string, request: string, result: string, status: AccessLogWithTelemetryStatus, options?: AccessLogWithTelemetryOptions | null);
    properties(): {
        [name: string]: any;
    };
}
