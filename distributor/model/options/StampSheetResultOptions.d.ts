import { ConsumeAction } from "../../../core/model";
export interface StampSheetResultOptions {
    taskRequests?: ConsumeAction[] | null;
    taskResults?: string[] | null;
    sheetResult?: string | null;
    nextTransactionId?: string | null;
    revision?: number | null;
}
