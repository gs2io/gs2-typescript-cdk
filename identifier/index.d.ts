import * as model from "./model";
import * as ref from "./ref";
import * as stampSheet from "./stampSheet";
declare function user(userName: string): ref.UserRef;
declare function securityPolicy(securityPolicyName: string): ref.SecurityPolicyRef;
declare const _default: {
    model: typeof model;
    ref: typeof ref;
    stampSheet: typeof stampSheet;
    user: typeof user;
    securityPolicy: typeof securityPolicy;
};
export default _default;
