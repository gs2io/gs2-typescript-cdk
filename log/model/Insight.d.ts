import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
export declare const InsightStatus: {
    readonly ALLOCATING: "ALLOCATING";
    readonly LAUNCHING: "LAUNCHING";
    readonly ACTIVE: "ACTIVE";
    readonly DELETED: "DELETED";
};
export declare type InsightStatus = typeof InsightStatus[keyof typeof InsightStatus];
import InsightRef from "../ref/InsightRef";
export default class Insight extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    constructor(stack: Stack, namespaceName: string);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): InsightRef;
    getAttrInsightId(): GetAttr;
}
