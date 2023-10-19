import RateModelRef from "./RateModelRef";
import IncrementalRateModelRef from "./IncrementalRateModelRef";
import ExchangeByUserId from "../stampSheet/ExchangeByUserId";
import { Config } from "../../core/model";
import IncrementalExchangeByUserId from "../stampSheet/IncrementalExchangeByUserId";
import UnlockIncrementalExchangeByUserId from "../stampSheet/UnlockIncrementalExchangeByUserId";
import CreateAwaitByUserId from "../stampSheet/CreateAwaitByUserId";
import DeleteAwaitByUserId from "../stampSheet/DeleteAwaitByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    rateModel(rateName: string): RateModelRef;
    incrementalRateModel(rateName: string): IncrementalRateModelRef;
    exchange(rateName: string, count: number, config?: Config[] | null, userId?: string | null): ExchangeByUserId;
    incrementalExchange(rateName: string, count: number, config?: Config[] | null, userId?: string | null): IncrementalExchangeByUserId;
    unlockIncrementalExchange(rateName: string, lockTransactionId: string, userId?: string | null): UnlockIncrementalExchangeByUserId;
    createAwait(rateName: string, count?: number | null, userId?: string | null): CreateAwaitByUserId;
    deleteAwait(awaitName?: string | null, userId?: string | null): DeleteAwaitByUserId;
    grn(): string;
}
