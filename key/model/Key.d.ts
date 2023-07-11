import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import KeyRef from "../ref/KeyRef";
import { KeyOptions } from "./options/KeyOptions";
export default class Key extends CdkResource {
    private readonly stack;
    private readonly namespaceName;
    private readonly name;
    private readonly description;
    constructor(stack: Stack, namespaceName: string, name: string, options?: KeyOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): KeyRef;
    getAttrKeyId(): GetAttr;
}
