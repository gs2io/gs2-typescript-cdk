import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import BlockingPolicyModel from "./BlockingPolicyModel";
import NamespaceRef from "../ref/NamespaceRef";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly blockingPolicy;
    private readonly description;
    constructor(stack: Stack, name: string, blockingPolicy: BlockingPolicyModel, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
}
