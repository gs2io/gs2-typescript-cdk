import { VerifyAction } from "../../core/model";
import { CompletedQuestListVerifyType } from "./enums/CompletedQuestListVerifyType";
export default class VerifyCompletedQuestListByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly questGroupName;
    private readonly questName;
    private readonly verifyType;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, questGroupName: string, questName: string, verifyType: CompletedQuestListVerifyType, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
