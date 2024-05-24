import RateModelRef from "./RateModelRef";
import IncrementalRateModelRef from "./IncrementalRateModelRef";
import ExchangeByUserId from "../stampSheet/ExchangeByUserId";
import { Config } from "../../core/model";
import IncrementalExchangeByUserId from "../stampSheet/IncrementalExchangeByUserId";
import UnlockIncrementalExchangeByUserId from "../stampSheet/UnlockIncrementalExchangeByUserId";
import CreateAwaitByUserId from "../stampSheet/CreateAwaitByUserId";
import SkipByUserId from "../stampSheet/SkipByUserId";
import { AwaitSkipType } from "../stampSheet/enum/AwaitSkipType";
import DeleteAwaitByUserId from "../stampSheet/DeleteAwaitByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    rateModel(rateName: string): RateModelRef;
    incrementalRateModel(rateName: string): IncrementalRateModelRef;
    exchange(rateName: string, count: number, config?: Config[] | null, userId?: string): ExchangeByUserId;
    incrementalExchange(rateName: string, count: number, config?: Config[] | null, userId?: string): IncrementalExchangeByUserId;
    unlockIncrementalExchange(rateName: string, lockTransactionId: string, userId?: string): UnlockIncrementalExchangeByUserId;
    createAwait(rateName: string, count?: number | null, config?: Config[] | null, userId?: string): CreateAwaitByUserId;
    skip(awaitName?: string | null, skipType?: AwaitSkipType | null, minutes?: number | null, rate?: number | null, userId?: string): SkipByUserId;
    deleteAwait(awaitName?: string | null, userId?: string): DeleteAwaitByUserId;
    grn(): string;
}
