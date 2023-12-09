import LimitModelRef from "./LimitModelRef";
import CountDownByUserId from "../stampSheet/CountDownByUserId";
import DeleteCounterByUserId from "../stampSheet/DeleteCounterByUserId";
import CountUpByUserId from "../stampSheet/CountUpByUserId";
import VerifyCounterByUserId from "../stampSheet/VerifyCounterByUserId";
import { CounterVerifyType } from "../stampSheet/enum/CounterVerifyType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    limitModel(limitName: string): LimitModelRef;
    countDown(limitName: string, counterName: string, countDownValue?: number | null, userId?: string): CountDownByUserId;
    deleteCounter(limitName: string, counterName: string, userId?: string): DeleteCounterByUserId;
    countUp(limitName: string, counterName: string, countUpValue?: number | null, maxValue?: number | null, userId?: string): CountUpByUserId;
    verifyCounter(limitName: string, counterName: string, verifyType: CounterVerifyType, count?: number | null, userId?: string): VerifyCounterByUserId;
    grn(): string;
}
