import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import IdentifierRef from "../ref/IdentifierRef";
import { IdentifierOptions } from "./options/IdentifierOptions";
export default class Identifier extends CdkResource {
    private readonly stack;
    private readonly userName;
    constructor(stack: Stack, userName: string, options?: IdentifierOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(clientId: string): IdentifierRef;
    getAttrClientId(): GetAttr;
    getAttrClientSecret(): GetAttr;
}
