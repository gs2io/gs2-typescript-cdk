import { NamespaceType } from "../enums/NamespaceType";
import { NamespaceFirehoseCompressData } from "../enums/NamespaceFirehoseCompressData";
export interface NamespaceOptions {
    description?: string | null;
    type?: NamespaceType | null;
    gcpCredentialJson?: string | null;
    bigQueryDatasetName?: string | null;
    logExpireDays?: number | null;
    awsRegion?: string | null;
    awsAccessKeyId?: string | null;
    awsSecretAccessKey?: string | null;
    firehoseStreamName?: string | null;
    firehoseCompressData?: NamespaceFirehoseCompressData | null;
}
