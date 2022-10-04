import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import AcquireAction from "../../core/model/AcquireAction";
import TimeSpan from "./TimeSpan";
import GlobalMessageMasterRef from "../ref/GlobalMessageMasterRef";
export interface GlobalMessageMasterOptions {
    readAcquireActions?: AcquireAction[] | null | undefined;
    expiresTimeSpan?: TimeSpan | null | undefined;
    expiresAt?: number | null | undefined;
}
export default class GlobalMessageMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly name;
    private readonly metadata;
    private readonly readAcquireActions;
    private readonly expiresTimeSpan;
    private readonly expiresAt;
    constructor(stack: Stack, namespaceName: string, name: string, metadata: string, options?: GlobalMessageMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): GlobalMessageMasterRef;
    getAttrGlobalMessageId(): GetAttr;
}
