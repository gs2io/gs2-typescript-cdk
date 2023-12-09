import { AcquireAction } from "../../core/model";
export default class RevertReceiveByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly missionGroupName;
    private readonly missionTaskName;
    private readonly userId;
    constructor(namespaceName: string, missionGroupName: string, missionTaskName: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
