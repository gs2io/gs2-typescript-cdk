import { ConsumeAction } from "../../core/model";
export default class VerifyRankByUserId extends ConsumeAction {
    constructor(namespaceName: string, experienceName: string, verifyType: string, propertyId: string, rankValue?: number | null, userId?: string | null);
}
