import { AcquireAction } from "../../core/model";
export default class ResetBoxByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly prizeTableName;
    private readonly userId;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, prizeTableName: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
