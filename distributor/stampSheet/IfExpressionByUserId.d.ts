import { ConsumeAction, VerifyAction } from "../../core/model";
export default class IfExpressionByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly condition;
    private readonly trueActions;
    private readonly falseActions;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, condition: VerifyAction, trueActions?: ConsumeAction[] | null, falseActions?: ConsumeAction[] | null, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
