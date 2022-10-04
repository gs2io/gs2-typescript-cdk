import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import Prize from "./Prize";
import PrizeTableMasterRef from "../ref/PrizeTableMasterRef";
export interface PrizeTableMasterOptions {
    description?: string | null | undefined;
    metadata?: string | null | undefined;
}
export default class PrizeTableMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly name;
    private readonly description;
    private readonly metadata;
    private readonly prizes;
    constructor(stack: Stack, namespaceName: string, name: string, prizes: Prize[], options?: PrizeTableMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): PrizeTableMasterRef;
    getAttrPrizeTableId(): GetAttr;
}
