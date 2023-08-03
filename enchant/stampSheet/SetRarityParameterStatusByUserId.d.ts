import { AcquireAction } from "../../core/model";
import RarityParameterValue from "../model/RarityParameterValue";
export default class SetRarityParameterStatusByUserId extends AcquireAction {
    constructor(namespaceName: string, parameterName: string, propertyId: string, parameterValues?: RarityParameterValue[] | null, userId?: string | null);
}
