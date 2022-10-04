import Policy from "../model/Policy";
import SecurityPolicyRef from "../ref/SecurityPolicyRef";
import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
export default class SecurityPolicy extends CdkResource {
    private stack;
    private readonly name;
    private readonly description;
    private readonly policy;
    constructor(stack: Stack, name: string, policy: Policy);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): SecurityPolicyRef;
    getAttrSecurityPolicyId(): GetAttr;
}
