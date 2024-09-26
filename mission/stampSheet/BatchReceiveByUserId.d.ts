import { ConsumeAction } from "../../core/model";
export default class BatchReceiveByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly missionGroupName;
    private readonly userId;
    private readonly missionTaskNames;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, missionGroupName: string, missionTaskNames: string[], timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
