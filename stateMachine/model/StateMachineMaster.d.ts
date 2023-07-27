import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import StateMachineMasterRef from "../ref/StateMachineMasterRef";
import { StateMachineMasterOptions } from "./options/StateMachineMasterOptions";
export default class StateMachineMaster extends CdkResource {
    private readonly stack;
    private readonly namespaceName;
    private readonly mainStateMachineName;
    private readonly payload;
    constructor(stack: Stack, namespaceName: string, mainStateMachineName: string, payload: string, options?: StateMachineMasterOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(version: number): StateMachineMasterRef;
    getAttrStateMachineId(): GetAttr;
}
