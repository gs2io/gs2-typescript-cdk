import core from "../../core";
import { Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import UserRef from "../ref/UserRef";
import Identifier from "./Identifier";
import SecurityPolicy from "./SecurityPolicy";
export default class User extends core.CdkResource {
    private stack;
    private readonly name;
    private readonly description;
    constructor(stack: Stack, name: string);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): UserRef;
    attach(securityPolicy: SecurityPolicy): User;
    identifier(): Identifier;
    getAttrUserId(): GetAttr;
}
