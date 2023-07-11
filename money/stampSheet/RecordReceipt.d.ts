import { ConsumeAction } from "../../core/model";
export default class RecordReceipt extends ConsumeAction {
    constructor(namespaceName: string, contentsId: string, receipt: string, userId?: string | null);
}
