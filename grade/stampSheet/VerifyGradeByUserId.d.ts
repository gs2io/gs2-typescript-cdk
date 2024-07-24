import { VerifyAction } from "../../core/model";
import { StatusVerifyType } from "./enum/StatusVerifyType";
export default class VerifyGradeByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly gradeName;
    private readonly verifyType;
    private readonly propertyId;
    private readonly gradeValue;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, gradeName: string, verifyType: StatusVerifyType, propertyId: string, gradeValue?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
