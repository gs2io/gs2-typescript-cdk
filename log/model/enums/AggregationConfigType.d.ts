export declare const AggregationConfigType: {
    readonly COUNT: "count";
    readonly UNIQUE: "unique";
    readonly SUM: "sum";
    readonly AVG: "avg";
    readonly MAX: "max";
    readonly MIN: "min";
    readonly P90: "p90";
    readonly P95: "p95";
    readonly P99: "p99";
};
export type AggregationConfigType = typeof AggregationConfigType[keyof typeof AggregationConfigType];
