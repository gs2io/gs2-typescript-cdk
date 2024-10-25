import { CdkResource, Stack } from "../../core/model";
export interface AttachGuardOptions {
}
export default class AttachGuard extends CdkResource {
    private stack;
    private userName;
    private clientId;
    private guardNamespaceId;
    constructor(stack: Stack, userName: string, clientId: string, guardNamespaceId: string, options?: AttachGuardOptions | null);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
