import RateModelRef from "./RateModelRef";
import IncrementalRateModelRef from "./IncrementalRateModelRef";
import ExchangeByUserId from "../stampSheet/ExchangeByUserId";
import { Config } from "../../core/model";
import IncrementalExchangeByUserId from "../stampSheet/IncrementalExchangeByUserId";
import CreateAwaitByUserId from "../stampSheet/CreateAwaitByUserId";
import AcquireForceByUserId from "../stampSheet/AcquireForceByUserId";
import SkipByUserId from "../stampSheet/SkipByUserId";
import { AwaitSkipType } from "../stampSheet/enums/AwaitSkipType";
import DeleteAwaitByUserId from "../stampSheet/DeleteAwaitByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    rateModel(rateName: string): RateModelRef;
    incrementalRateModel(rateName: string): IncrementalRateModelRef;
    exchange(rateName: string, count: number, config?: Config[] | null, userId?: string): ExchangeByUserId;
    incrementalExchange(rateName: string, count: number, config?: Config[] | null, userId?: string): IncrementalExchangeByUserId;
    createAwait(rateName: string, count?: number | null, config?: Config[] | null, userId?: string): CreateAwaitByUserId;
    acquireForce(awaitName?: string | null, config?: Config[] | null, userId?: string): AcquireForceByUserId;
    skip(awaitName?: string | null, skipType?: AwaitSkipType | null, minutes?: number | null, rate?: number | null, userId?: string): SkipByUserId;
    deleteAwait(awaitName?: string | null, userId?: string): DeleteAwaitByUserId;
    grn(): string;
}
