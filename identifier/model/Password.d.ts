import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import PasswordRef from "../ref/PasswordRef";
export default class Password extends CdkResource {
    private stack;
    private readonly userName;
    private readonly password;
    constructor(stack: Stack, userName: string, password: string);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(userName: string): PasswordRef;
    getAttrUserId(): GetAttr;
}
