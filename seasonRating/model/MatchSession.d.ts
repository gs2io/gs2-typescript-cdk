import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import MatchSessionRef from "../ref/MatchSessionRef";
import { MatchSessionOptions } from "./options/MatchSessionOptions";
export default class MatchSession extends CdkResource {
    private readonly stack;
    private readonly namespaceName;
    private readonly sessionName;
    private readonly ttlSeconds;
    constructor(stack: Stack, namespaceName: string, options?: MatchSessionOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(name: string): MatchSessionRef;
    getAttrSessionId(): GetAttr;
}
