import { ConsumeAction } from "../../core/model";
export default class DeleteJobByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly jobName;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, jobName?: string | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
