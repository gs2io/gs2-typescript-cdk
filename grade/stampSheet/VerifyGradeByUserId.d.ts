import { ConsumeAction } from "../../core/model";
import { StatusVerifyType } from "./enum/StatusVerifyType";
export default class VerifyGradeByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly gradeName;
    private readonly verifyType;
    private readonly propertyId;
    private readonly gradeValue;
    constructor(namespaceName: string, gradeName: string, verifyType: StatusVerifyType, propertyId: string, gradeValue?: number | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
