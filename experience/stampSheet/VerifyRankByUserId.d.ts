import { ConsumeAction } from "../../core/model";
import { StatusVerifyType } from "./enum/StatusVerifyType";
export default class VerifyRankByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly experienceName;
    private readonly verifyType;
    private readonly propertyId;
    private readonly rankValue;
    constructor(namespaceName: string, experienceName: string, verifyType: StatusVerifyType, propertyId: string, rankValue?: number | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
