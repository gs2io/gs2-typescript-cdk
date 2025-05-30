import Version from "./Version";
import { VersionModelOptions } from "./options/VersionModelOptions";
import { VersionModelTypeIsSimpleOptions } from "./options/VersionModelTypeIsSimpleOptions";
import { VersionModelTypeIsScheduleOptions } from "./options/VersionModelTypeIsScheduleOptions";
import { VersionModelScopeIsPassiveOptions } from "./options/VersionModelScopeIsPassiveOptions";
import { VersionModelScopeIsActiveOptions } from "./options/VersionModelScopeIsActiveOptions";
import { VersionModelScope } from "./enums/VersionModelScope";
import { VersionModelType } from "./enums/VersionModelType";
import { VersionModelApproveRequirement } from "./enums/VersionModelApproveRequirement";
export default class VersionModel {
    private readonly name;
    private readonly scope;
    private readonly type;
    private readonly metadata;
    private readonly currentVersion;
    private readonly warningVersion;
    private readonly errorVersion;
    private readonly scheduleVersions;
    private readonly needSignature;
    private readonly signatureKeyId;
    private readonly approveRequirement;
    constructor(name: string, scope: VersionModelScope, type: VersionModelType, options?: VersionModelOptions | null);
    static typeIsSimple(name: string, scope: VersionModelScope, warningVersion: Version, errorVersion: Version, options?: VersionModelTypeIsSimpleOptions | null): VersionModel;
    static typeIsSchedule(name: string, scope: VersionModelScope, options?: VersionModelTypeIsScheduleOptions | null): VersionModel;
    static scopeIsPassive(name: string, type: VersionModelType, needSignature: boolean, options?: VersionModelScopeIsPassiveOptions | null): VersionModel;
    static scopeIsActive(name: string, type: VersionModelType, approveRequirement: VersionModelApproveRequirement, options?: VersionModelScopeIsActiveOptions | null): VersionModel;
    properties(): {
        [name: string]: any;
    };
}
