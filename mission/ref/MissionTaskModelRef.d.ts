export default class MissionTaskModelRef {
    private readonly namespaceName;
    private readonly missionGroupName;
    private readonly missionTaskName;
    constructor(namespaceName: string, missionGroupName: string, missionTaskName: string);
    grn(): string;
}
