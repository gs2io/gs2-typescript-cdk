import { AcquireAction } from "../../core/model";
export default class SetRecoverValueByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly staminaName;
    private readonly userId;
    private readonly recoverValue;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, staminaName: string, recoverValue: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
