import { ConsumeAction } from "../../core/model";
export default class VerifyReceiptByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly contentName;
    private readonly receipt;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, contentName: string, receipt?: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
