import { AcquireAction } from "../../core/model";
export default class RevertReceiveByUserId extends AcquireAction {
    constructor(namespaceName: string, missionGroupName: string, missionTaskName: string, userId?: string | null);
}
