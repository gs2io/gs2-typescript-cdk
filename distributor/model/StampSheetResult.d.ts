import { AcquireAction } from "../../core/model";
import { StampSheetResultOptions } from "./options/StampSheetResultOptions";
export default class StampSheetResult {
    private readonly userId;
    private readonly transactionId;
    private readonly sheetRequest;
    private readonly taskRequests;
    private readonly taskResults;
    private readonly sheetResult;
    private readonly nextTransactionId;
    constructor(userId: string, transactionId: string, sheetRequest: AcquireAction, options?: StampSheetResultOptions | null);
    properties(): {
        [name: string]: any;
    };
}
