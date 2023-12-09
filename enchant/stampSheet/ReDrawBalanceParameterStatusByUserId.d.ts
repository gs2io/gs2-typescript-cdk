import { AcquireAction } from "../../core/model";
export default class ReDrawBalanceParameterStatusByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly parameterName;
    private readonly propertyId;
    private readonly fixedParameterNames;
    constructor(namespaceName: string, parameterName: string, propertyId: string, fixedParameterNames?: string[] | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
