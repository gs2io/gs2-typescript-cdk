import { AggregationConfigType } from "../enums/AggregationConfigType";
export interface AggregationConfigOptions {
    type?: AggregationConfigType | null;
    field?: string | null;
}
