import { CdkResource, Stack } from "../../core/model";
export default class AttachSecurityPolicy extends CdkResource {
    private stack;
    private userName;
    private securityPolicyId;
    constructor(stack: Stack, userName: string, securityPolicyId: string);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
