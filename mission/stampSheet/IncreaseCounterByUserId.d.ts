import { AcquireAction } from "../../core/model";
export default class IncreaseCounterByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly counterName;
    private readonly userId;
    private readonly value;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, counterName: string, value: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
