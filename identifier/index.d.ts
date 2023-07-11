import * as model from "./model";
import * as ref from "./ref";
import * as stampSheet from "./stampSheet";
import { UserRef } from "./ref";
import { SecurityPolicyRef } from "./ref";
declare function user(userName: string): UserRef;
declare function securityPolicy(securityPolicyName: string): SecurityPolicyRef;
declare const _default: {
    model: typeof model;
    ref: typeof ref;
    stampSheet: typeof stampSheet;
    user: typeof user;
    securityPolicy: typeof securityPolicy;
};
export default _default;
