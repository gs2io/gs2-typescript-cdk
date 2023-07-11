import QuestModelRef from "./QuestModelRef";
export default class QuestGroupModelRef {
    private readonly namespaceName;
    private readonly questGroupName;
    constructor(namespaceName: string, questGroupName: string);
    questModel(questName: string): QuestModelRef;
    grn(): string;
}
