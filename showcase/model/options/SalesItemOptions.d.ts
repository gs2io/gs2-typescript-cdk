import { ConsumeAction } from "../../../core/model";
export interface SalesItemOptions {
    metadata?: string | null;
    consumeActions?: ConsumeAction[] | null;
}
