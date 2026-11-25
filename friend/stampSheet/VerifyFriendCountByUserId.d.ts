import { VerifyAction } from "../../core/model";
import { FriendVerifyType } from "./enums/FriendVerifyType";
export default class VerifyFriendCountByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly verifyType;
    private readonly count;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, verifyType: FriendVerifyType, count: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
