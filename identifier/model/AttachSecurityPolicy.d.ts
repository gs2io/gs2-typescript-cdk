import { CdkResource, Stack } from "../../core/model";
export interface AttachSecurityPolicyOptions {
}
export default class AttachSecurityPolicy extends CdkResource {
    private stack;
    private userName;
    private securityPolicyId;
    constructor(stack: Stack, userName: string, securityPolicyId: string, options?: AttachSecurityPolicyOptions | null);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
