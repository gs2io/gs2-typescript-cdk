import IncreaseCounterByUserId from "../stampSheet/IncreaseCounterByUserId";
import SetCounterByUserId from "../stampSheet/SetCounterByUserId";
import ScopedValue from "../model/ScopedValue";
import DecreaseCounterByUserId from "../stampSheet/DecreaseCounterByUserId";
import ResetCounterByUserId from "../stampSheet/ResetCounterByUserId";
import VerifyCounterValueByUserId from "../stampSheet/VerifyCounterValueByUserId";
import { CounterVerifyType } from "../stampSheet/enum/CounterVerifyType";
import { CounterScopeType } from "../stampSheet/enum/CounterScopeType";
import { CounterResetType } from "../stampSheet/enum/CounterResetType";
export default class CounterModelRef {
    private readonly namespaceName;
    private readonly counterName;
    constructor(namespaceName: string, counterName: string);
    increaseCounter(value: number, userId?: string): IncreaseCounterByUserId;
    setCounter(values?: ScopedValue[] | null, userId?: string): SetCounterByUserId;
    decreaseCounter(value: number, userId?: string): DecreaseCounterByUserId;
    resetCounter(scopes: ScopedValue[], userId?: string): ResetCounterByUserId;
    verifyCounterValue(verifyType: CounterVerifyType, scopeType?: CounterScopeType | null, resetType?: CounterResetType | null, conditionName?: string | null, value?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyCounterValueByUserId;
    grn(): string;
}
