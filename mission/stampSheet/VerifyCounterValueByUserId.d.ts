import { VerifyAction } from "../../core/model";
import { CounterVerifyType } from "./enum/CounterVerifyType";
import { CounterResetType } from "./enum/CounterResetType";
export default class VerifyCounterValueByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly counterName;
    private readonly verifyType;
    private readonly resetType;
    private readonly value;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, counterName: string, verifyType: CounterVerifyType, resetType: CounterResetType, value?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
