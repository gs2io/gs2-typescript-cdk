import { VerifyAction } from "../../core/model";
import { CounterVerifyType } from "./enum/CounterVerifyType";
export default class VerifyCounterByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly limitName;
    private readonly counterName;
    private readonly verifyType;
    private readonly count;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, limitName: string, counterName: string, verifyType: CounterVerifyType, count?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
