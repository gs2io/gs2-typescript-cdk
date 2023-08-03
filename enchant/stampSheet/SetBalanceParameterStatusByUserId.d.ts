import { AcquireAction } from "../../core/model";
import BalanceParameterValue from "../model/BalanceParameterValue";
export default class SetBalanceParameterStatusByUserId extends AcquireAction {
    constructor(namespaceName: string, parameterName: string, propertyId: string, parameterValues: BalanceParameterValue[], userId?: string | null);
}
