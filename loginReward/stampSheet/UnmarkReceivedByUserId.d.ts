import { AcquireAction } from "../../core/model";
export default class UnmarkReceivedByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly bonusModelName;
    private readonly userId;
    private readonly stepNumber;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, bonusModelName: string, stepNumber: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
