import { VerifyAction } from "../../core/model";
import { FriendVerifyType } from "./enums/FriendVerifyType";
export default class VerifyFriendByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly targetUserId;
    private readonly verifyType;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, targetUserId: string, verifyType: FriendVerifyType, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
