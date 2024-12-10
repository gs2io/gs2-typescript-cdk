import Version from "../Version";
import ScheduleVersion from "../ScheduleVersion";
import { VersionModelApproveRequirement } from "../enum/VersionModelApproveRequirement";
export interface VersionModelOptions {
    metadata?: string | null;
    currentVersion?: Version | null;
    warningVersion?: Version | null;
    errorVersion?: Version | null;
    scheduleVersions?: ScheduleVersion[] | null;
    needSignature?: boolean | null;
    signatureKeyId?: string | null;
    approveRequirement?: VersionModelApproveRequirement | null;
}
