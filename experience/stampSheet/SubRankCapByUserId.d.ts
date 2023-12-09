import { ConsumeAction } from "../../core/model";
export default class SubRankCapByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly experienceName;
    private readonly propertyId;
    private readonly rankCapValue;
    constructor(namespaceName: string, experienceName: string, propertyId: string, rankCapValue: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
