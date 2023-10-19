import { ConsumeAction } from "../../core/model";
export default class VerifyRankCapByUserId extends ConsumeAction {
    constructor(namespaceName: string, experienceName: string, verifyType: string, propertyId: string, rankCapValue: number, userId?: string | null);
}
