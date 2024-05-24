import { ConsumeAction } from "../../core/model";
export default class OpenMessageByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly messageName;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, messageName?: string | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
