import { ConsumeAction } from "../../core/model";
export default class VerifyRarityParameterStatusByUserId extends ConsumeAction {
    constructor(namespaceName: string, parameterName: string, propertyId: string, verifyType: string, parameterValueName?: string | null, parameterCount?: number | null, userId?: string | null);
}
