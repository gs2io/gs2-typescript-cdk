import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import Policy from "./Policy";
import SecurityPolicyRef from "../ref/SecurityPolicyRef";
import { SecurityPolicyOptions } from "./options/SecurityPolicyOptions";
export default class SecurityPolicy extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly policy;
    private readonly description;
    constructor(stack: Stack, name: string, policy: Policy, options?: SecurityPolicyOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): SecurityPolicyRef;
    static applicationAccessGrn(): string;
    getAttrSecurityPolicyId(): GetAttr;
}
