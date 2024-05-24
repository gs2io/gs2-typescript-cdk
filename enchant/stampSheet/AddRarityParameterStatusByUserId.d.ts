import { AcquireAction } from "../../core/model";
export default class AddRarityParameterStatusByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly parameterName;
    private readonly propertyId;
    private readonly count;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, parameterName: string, propertyId: string, count?: number | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
