import { ConsumeAction } from "../../core/model";
import { NodeModelOptions } from "./options/NodeModelOptions";
export default class NodeModel {
    private readonly name;
    private readonly releaseConsumeActions;
    private readonly restrainReturnRate;
    private readonly metadata;
    private readonly releaseVerifyActions;
    private readonly returnAcquireActions;
    private readonly premiseNodeNames;
    constructor(name: string, releaseConsumeActions: ConsumeAction[], restrainReturnRate: number, options?: NodeModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
