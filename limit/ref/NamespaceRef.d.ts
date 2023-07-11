import LimitModelRef from "./LimitModelRef";
import DeleteCounterByUserId from "../stampSheet/DeleteCounterByUserId";
import CountUpByUserId from "../stampSheet/CountUpByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    limitModel(limitName: string): LimitModelRef;
    deleteCounter(limitName: string, counterName: string, userId?: string | null): DeleteCounterByUserId;
    countUp(limitName: string, counterName: string, countUpValue: number, maxValue?: number | null, userId?: string | null): CountUpByUserId;
    grn(): string;
}
