import { ConsumeAction } from "../../core/model";
import { CounterVerifyType } from "./enum/CounterVerifyType";
export default class VerifyCounterByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly limitName;
    private readonly counterName;
    private readonly verifyType;
    private readonly count;
    constructor(namespaceName: string, limitName: string, counterName: string, verifyType: CounterVerifyType, count?: number | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
