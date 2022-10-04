import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
export declare const NamespaceType: {
    readonly GS2: "gs2";
    readonly BIGQUERY: "bigquery";
    readonly FIREHOSE: "firehose";
};
export declare type NamespaceType = typeof NamespaceType[keyof typeof NamespaceType];
import NamespaceRef from "../ref/NamespaceRef";
export interface NamespaceOptions {
    description?: string | null | undefined;
    gcpCredentialJson?: string | null | undefined;
    bigQueryDatasetName?: string | null | undefined;
    logExpireDays?: number | null | undefined;
    awsRegion?: string | null | undefined;
    awsAccessKeyId?: string | null | undefined;
    awsSecretAccessKey?: string | null | undefined;
    firehoseStreamName?: string | null | undefined;
}
export interface NamespaceGs2Options {
}
export interface NamespaceBigqueryOptions {
}
export interface NamespaceFirehoseOptions {
}
export default class Namespace extends core.CdkResource {
    private stack;
    private readonly name;
    private readonly description;
    private readonly type;
    private readonly gcpCredentialJson;
    private readonly bigQueryDatasetName;
    private readonly logExpireDays;
    private readonly awsRegion;
    private readonly awsAccessKeyId;
    private readonly awsSecretAccessKey;
    private readonly firehoseStreamName;
    constructor(stack: Stack, name: string, type: NamespaceType, options?: NamespaceOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
}
