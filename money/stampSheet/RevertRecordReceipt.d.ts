import { AcquireAction } from "../../core/model";
export default class RevertRecordReceipt extends AcquireAction {
    constructor(namespaceName: string, receipt: string, userId?: string | null);
}
