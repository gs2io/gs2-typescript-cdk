import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import Identifier from "./Identifier";
import SecurityPolicy from "./SecurityPolicy";
import UserRef from "../ref/UserRef";
import { UserOptions } from "./options/UserOptions";
export default class User extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly description;
    constructor(stack: Stack, name: string, options?: UserOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): UserRef;
    attach(securityPolicy: SecurityPolicy): User;
    attachGrn(securityPolicyGrn: string): User;
    identifier(): Identifier;
    getAttrUserId(): GetAttr;
}
