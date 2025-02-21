export declare const NamespaceType: {
    readonly GS2: "gs2";
    readonly BIGQUERY: "bigquery";
    readonly FIREHOSE: "firehose";
};
export type NamespaceType = typeof NamespaceType[keyof typeof NamespaceType];
