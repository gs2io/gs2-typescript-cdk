import { ConsumeAction } from "../../../core/model";
export interface StampSheetResultOptions {
    taskRequests?: ConsumeAction[] | null;
    taskResultCodes?: number[] | null;
    taskResults?: string[] | null;
    sheetResultCode?: number | null;
    sheetResult?: string | null;
    nextTransactionId?: string | null;
    revision?: number | null;
}
