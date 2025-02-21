import { VerifyAction } from "../../core/model";
import { StatusVerifyType } from "./enums/StatusVerifyType";
export default class VerifyGradeUpMaterialByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly gradeName;
    private readonly verifyType;
    private readonly propertyId;
    private readonly materialPropertyId;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, gradeName: string, verifyType: StatusVerifyType, propertyId: string, materialPropertyId: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
