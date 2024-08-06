import { AcquireAction } from "../../core/model";
export default class UpdateProfileByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly publicProfile;
    private readonly followerProfile;
    private readonly friendProfile;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, publicProfile?: string | null, followerProfile?: string | null, friendProfile?: string | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
