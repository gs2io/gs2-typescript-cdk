import { ConsumeAction } from "../../core/model";
export default class DeleteProgressByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
