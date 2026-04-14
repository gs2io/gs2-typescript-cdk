export declare const MetricModelType: {
    readonly STRING: "string";
    readonly DOUBLE: "double";
    readonly MEASURE: "measure";
};
export type MetricModelType = typeof MetricModelType[keyof typeof MetricModelType];
