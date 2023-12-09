import QuestGroupModelRef from "./QuestGroupModelRef";
import CreateProgressByUserId from "../stampSheet/CreateProgressByUserId";
import { Config } from "../../core/model";
import DeleteProgressByUserId from "../stampSheet/DeleteProgressByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    questGroupModel(questGroupName: string): QuestGroupModelRef;
    createProgress(questModelId: string, force?: boolean | null, config?: Config[] | null, userId?: string): CreateProgressByUserId;
    deleteProgress(userId?: string): DeleteProgressByUserId;
    grn(): string;
}
