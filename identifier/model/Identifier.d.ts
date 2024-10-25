import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import IdentifierRef from "../ref/IdentifierRef";
import { IdentifierOptions } from "./options/IdentifierOptions";
import { Namespace } from "../../guard/model";
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
    attach(guardNamespace: Namespace): Identifier;
    attachGrn(guardNamespaceGrn: string): Identifier;
    getAttrClientId(): GetAttr;
    getAttrClientSecret(): GetAttr;
}
