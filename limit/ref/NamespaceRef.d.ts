import LimitModelRef from "./LimitModelRef";
import CountDownByUserId from "../stampSheet/CountDownByUserId";
import DeleteCounterByUserId from "../stampSheet/DeleteCounterByUserId";
import CountUpByUserId from "../stampSheet/CountUpByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    limitModel(limitName: string): LimitModelRef;
    countDown(limitName: string, counterName: string, countDownValue: number, userId?: string | null): CountDownByUserId;
    deleteCounter(limitName: string, counterName: string, userId?: string | null): DeleteCounterByUserId;
    countUp(limitName: string, counterName: string, countUpValue: number, maxValue?: number | null, userId?: string | null): CountUpByUserId;
    grn(): string;
}
