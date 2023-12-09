import { AcquireAction } from "../../core/model";
import RarityParameterValue from "../model/RarityParameterValue";
export default class SetRarityParameterStatusByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly parameterName;
    private readonly propertyId;
    private readonly parameterValues;
    constructor(namespaceName: string, parameterName: string, propertyId: string, parameterValues?: RarityParameterValue[] | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
