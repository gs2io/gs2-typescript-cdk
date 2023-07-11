export default class QuestModelRef {
    private readonly namespaceName;
    private readonly questGroupName;
    private readonly questName;
    constructor(namespaceName: string, questGroupName: string, questName: string);
    grn(): string;
}
