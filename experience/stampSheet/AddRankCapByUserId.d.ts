import { AcquireAction } from "../../core/model";
export default class AddRankCapByUserId extends AcquireAction {
    constructor(namespaceName: string, experienceName: string, propertyId: string, rankCapValue: number, userId?: string | null);
}
