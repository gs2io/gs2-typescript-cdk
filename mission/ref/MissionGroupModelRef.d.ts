import MissionTaskModelRef from "./MissionTaskModelRef";
export default class MissionGroupModelRef {
    private readonly namespaceName;
    private readonly missionGroupName;
    constructor(namespaceName: string, missionGroupName: string);
    missionTaskModel(missionTaskName: string): MissionTaskModelRef;
    grn(): string;
}
