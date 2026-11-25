import UpdateProfileByUserId from "../stampSheet/UpdateProfileByUserId";
import VerifyFollowByUserId from "../stampSheet/VerifyFollowByUserId";
import { FollowVerifyType } from "../stampSheet/enums/FollowVerifyType";
import VerifyFriendByUserId from "../stampSheet/VerifyFriendByUserId";
import { FriendVerifyType } from "../stampSheet/enums/FriendVerifyType";
import VerifyFriendCountByUserId from "../stampSheet/VerifyFriendCountByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    updateProfile(publicProfile?: string | null, followerProfile?: string | null, friendProfile?: string | null, userId?: string): UpdateProfileByUserId;
    verifyFollow(targetUserId: string, verifyType: FollowVerifyType, userId?: string): VerifyFollowByUserId;
    verifyFriend(targetUserId: string, verifyType: FriendVerifyType, userId?: string): VerifyFriendByUserId;
    verifyFriendCount(verifyType: FriendVerifyType, count: number, userId?: string): VerifyFriendCountByUserId;
    grn(): string;
}
