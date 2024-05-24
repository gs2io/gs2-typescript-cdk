import { AcquireAction } from "../../core/model";
export default class AcquireItemSetWithGradeByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly itemName;
    private readonly userId;
    private readonly gradeModelId;
    private readonly gradeValue;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, itemName: string, gradeModelId: string, gradeValue: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
