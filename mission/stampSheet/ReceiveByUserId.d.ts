import { ConsumeAction } from "../../core/model";
export default class ReceiveByUserId extends ConsumeAction {
    constructor(namespaceName: string, missionGroupName: string, missionTaskName: string, userId?: string | null);
}
