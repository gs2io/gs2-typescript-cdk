import { AcquireAction } from "../../core/model";
import BalanceParameterValue from "../model/BalanceParameterValue";
export default class SetBalanceParameterStatusByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly parameterName;
    private readonly propertyId;
    private readonly parameterValues;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, parameterName: string, propertyId: string, parameterValues: BalanceParameterValue[], timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
