import { ConsumeAction } from "../../core/model";
export default class SubRankCapByUserId extends ConsumeAction {
    constructor(namespaceName: string, experienceName: string, propertyId: string, rankCapValue: number, userId?: string | null);
}
