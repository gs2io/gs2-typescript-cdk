import { AcquireAction } from "../../core/model";
export default class AddGradeByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly gradeName;
    private readonly propertyId;
    private readonly gradeValue;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, gradeName: string, propertyId: string, gradeValue?: number | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
