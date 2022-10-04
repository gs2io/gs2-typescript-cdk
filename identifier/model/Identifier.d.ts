import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
export default class Identifier extends core.CdkResource {
    private stack;
    private readonly userName;
    constructor(stack: Stack, userName: string);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    getAttrClientId(): GetAttr;
    getAttrClientSecret(): GetAttr;
}
