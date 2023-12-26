import { ConsumeAction } from "../../core/model";
export default class SubGradeByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly gradeName;
    private readonly propertyId;
    private readonly gradeValue;
    constructor(namespaceName: string, gradeName: string, propertyId: string, gradeValue?: number | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
