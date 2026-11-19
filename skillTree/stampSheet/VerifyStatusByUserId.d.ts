import { VerifyAction } from "../../core/model";
import { StatusVerifyType } from "./enums/StatusVerifyType";
export default class VerifyStatusByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly propertyId;
    private readonly nodeModelName;
    private readonly verifyType;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, propertyId: string, nodeModelName: string, verifyType: StatusVerifyType, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
