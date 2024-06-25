import { ConsumeAction } from "../../core/model";
import Receipt from "../model/Receipt";
export default class VerifyReceiptByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly contentName;
    private readonly receipt;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, contentName: string, receipt: Receipt, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
