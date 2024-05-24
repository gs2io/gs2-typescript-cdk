import { AcquireAction } from "../../core/model";
export default class SetRankCapByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly experienceName;
    private readonly propertyId;
    private readonly rankCapValue;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, experienceName: string, propertyId: string, rankCapValue: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
