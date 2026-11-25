import { VerifyAction } from "../../core/model";
import { FollowVerifyType } from "./enums/FollowVerifyType";
export default class VerifyFollowByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly targetUserId;
    private readonly verifyType;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, targetUserId: string, verifyType: FollowVerifyType, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
