import { AcquireAction } from "../../core/model";
import BalanceParameterValue from "../model/BalanceParameterValue";
export default class SetBalanceParameterStatusByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly parameterName;
    private readonly propertyId;
    private readonly parameterValues;
    constructor(namespaceName: string, parameterName: string, propertyId: string, parameterValues: BalanceParameterValue[], userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
