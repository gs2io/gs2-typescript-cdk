import QuestGroupModelRef from "./QuestGroupModelRef";
import CreateProgressByUserId from "../stampSheet/CreateProgressByUserId";
import { Config } from "../../core/model";
import DeleteProgressByUserId from "../stampSheet/DeleteProgressByUserId";
import VerifyCompletedQuestListByUserId from "../stampSheet/VerifyCompletedQuestListByUserId";
import { CompletedQuestListVerifyType } from "../stampSheet/enums/CompletedQuestListVerifyType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    questGroupModel(questGroupName: string): QuestGroupModelRef;
    createProgress(questModelId: string, force?: boolean | null, config?: Config[] | null, userId?: string): CreateProgressByUserId;
    deleteProgress(userId?: string): DeleteProgressByUserId;
    verifyCompletedQuestList(questGroupName: string, questName: string, verifyType: CompletedQuestListVerifyType, userId?: string): VerifyCompletedQuestListByUserId;
    grn(): string;
}
