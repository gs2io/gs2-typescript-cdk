import { AcquireAction } from "../../core/model";
export default class AddRarityParameterStatusByUserId extends AcquireAction {
    constructor(namespaceName: string, parameterName: string, propertyId: string, count?: number | null, userId?: string | null);
}
