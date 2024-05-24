import { AcquireAction } from "../../core/model";
export default class RevertUseByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly code;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, code: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
