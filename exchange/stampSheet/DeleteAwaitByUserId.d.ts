import { ConsumeAction } from "../../core/model";
export default class DeleteAwaitByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly awaitName;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, awaitName?: string | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
