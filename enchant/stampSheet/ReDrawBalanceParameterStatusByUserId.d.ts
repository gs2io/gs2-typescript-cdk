import { AcquireAction } from "../../core/model";
export default class ReDrawBalanceParameterStatusByUserId extends AcquireAction {
    constructor(namespaceName: string, parameterName: string, propertyId: string, fixedParameterNames?: string[] | null, userId?: string | null);
}
