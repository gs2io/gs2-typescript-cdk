import UpdateProfileByUserId from "../stampSheet/UpdateProfileByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    updateProfile(publicProfile?: string | null, followerProfile?: string | null, friendProfile?: string | null, userId?: string): UpdateProfileByUserId;
    grn(): string;
}
