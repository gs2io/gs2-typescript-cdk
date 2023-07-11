import { AcquireAction } from "../../core/model";
export default class SetRankCapByUserId extends AcquireAction {
    constructor(namespaceName: string, experienceName: string, propertyId: string, rankCapValue: number, userId?: string | null);
}
