import Version from "../Version";
export interface VersionModelOptions {
    metadata?: string | null;
    currentVersion?: Version | null;
    needSignature?: boolean | null;
    signatureKeyId?: string | null;
}
