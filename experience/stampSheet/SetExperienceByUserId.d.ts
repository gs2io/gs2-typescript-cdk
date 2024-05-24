import { AcquireAction } from "../../core/model";
export default class SetExperienceByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly experienceName;
    private readonly propertyId;
    private readonly experienceValue;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, experienceName: string, propertyId: string, experienceValue?: number | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
