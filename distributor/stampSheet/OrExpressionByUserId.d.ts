import { VerifyAction } from "../../core/model";
export default class OrExpressionByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly actions;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, actions?: VerifyAction[] | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
