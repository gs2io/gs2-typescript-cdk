import { ConsumeAction } from "../../core/model";
export default class RecordReceipt extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly contentsId;
    private readonly receipt;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, contentsId: string, receipt: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
