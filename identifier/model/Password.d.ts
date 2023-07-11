import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import PasswordRef from "../ref/PasswordRef";
import { PasswordOptions } from "./options/PasswordOptions";
export default class Password extends CdkResource {
    private readonly stack;
    private readonly userName;
    private readonly password;
    constructor(stack: Stack, userName: string, password: string, options?: PasswordOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): PasswordRef;
    getAttrPasswordId(): GetAttr;
}
