import { VerifyAction } from "../../core/model";
import { CounterVerifyType } from "./enums/CounterVerifyType";
import { CounterScopeType } from "./enums/CounterScopeType";
import { CounterResetType } from "./enums/CounterResetType";
export default class VerifyCounterValueByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly counterName;
    private readonly verifyType;
    private readonly scopeType;
    private readonly resetType;
    private readonly conditionName;
    private readonly value;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, counterName: string, verifyType: CounterVerifyType, scopeType?: CounterScopeType | null, resetType?: CounterResetType | null, conditionName?: string | null, value?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
