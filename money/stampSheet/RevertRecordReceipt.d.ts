import { AcquireAction } from "../../core/model";
export default class RevertRecordReceipt extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly receipt;
    constructor(namespaceName: string, receipt: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
