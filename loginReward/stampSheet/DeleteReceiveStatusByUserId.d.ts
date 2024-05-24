import { AcquireAction } from "../../core/model";
export default class DeleteReceiveStatusByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly bonusModelName;
    private readonly userId;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, bonusModelName: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
