import { ConsumeAction } from "../../core/model";
import { StatusVerifyType } from "./enum/StatusVerifyType";
export default class VerifyRankCapByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly experienceName;
    private readonly verifyType;
    private readonly propertyId;
    private readonly rankCapValue;
    constructor(namespaceName: string, experienceName: string, verifyType: StatusVerifyType, propertyId: string, rankCapValue: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
