import { AcquireAction } from "../../core/model";
export default class RevertRecordReceipt extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly receipt;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, receipt: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
