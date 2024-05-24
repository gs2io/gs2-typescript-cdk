import { ConsumeAction } from "../../core/model";
export default class ReceiveByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly missionGroupName;
    private readonly missionTaskName;
    private readonly userId;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, missionGroupName: string, missionTaskName: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
